const formDOM = document.getElementById('loginInfo');
const usernameDOM = document.getElementById('username');
const passwordDOM = document.getElementById('password');
const loginBTN = document.getElementById('login');
const signBTN = document.getElementById('signup');
const localData = JSON.parse(localStorage.getItem('users')) || [];
let userList;

// Function to hash a string using SHA-256
function sha256(str) {
    return CryptoJS.SHA256(str).toString(CryptoJS.enc.Hex);
}

window.onload = () => {
    const adminData = {
        username: "furkan", password: sha256('123456'),
    };
    userList = localData;  
    // Check if the admin user exists, if not, add it
    if (!userList.some((user) => user.username === "furkan")) {
        userList.push(adminData);
        localStorage.setItem("users", JSON.stringify(userList));
    }
};

formDOM.onsubmit = () => { return false; }

signBTN.onclick = () => {
    window.location.href = "signup.html";
}

loginBTN.onclick = () => {
    if (usernameDOM.value && passwordDOM.value) {
        const user = userList.find(u => u.username === usernameDOM.value)

        if (user) {
            // Hash the entered password and compare it to the stored hashed password
            if (sha256(passwordDOM.value) === user.password) {
                console.log("Login successful");
                localStorage.setItem('currentUser', usernameDOM.value);
                formDOM.onsubmit = () => { return 1; }
            } else {
                alert('Password not match!');
            }
        } else {
            alert('Username not match!');
        }
    } else {
        if (!usernameDOM.value || !passwordDOM.value) {
            alert('Username or Password is empty!');
        }
    }
}
