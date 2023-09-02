const formDOM = document.getElementById('loginInfo');
const usernameDOM = document.getElementById('username');
const passwordDOM = document.getElementById('password');
const localData = JSON.parse(localStorage.getItem('users')) || [];

// Function to hash a string using SHA-256
function sha256(str) {
    return CryptoJS.SHA256(str).toString(CryptoJS.enc.Hex);
}

formDOM.addEventListener('submit', (e) => {
    e.preventDefault();
    // Check if the username already exists
    const usernameExists = localData.find(u => u.username === usernameDOM.value)
    if (usernameExists) {
        alert('Username already exists!');
        return;
    }
    if (passwordDOM.value === "") {
        alert('Enter a password!');
        return;
    }
    const user = {
        username: usernameDOM.value,
        // Hash the password before saving it
        password: sha256(passwordDOM.value),
    };
    if (user) {
        alert('You have successfully signed up!');
        localData.push(user);
        localStorage.setItem('users', JSON.stringify(localData));
        window.location.href = 'index.html';
    }
});