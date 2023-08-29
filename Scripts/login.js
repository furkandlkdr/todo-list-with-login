const formDOM = document.getElementById('loginInfo');
const usernameDOM = document.getElementById('username');
const passwordDOM = document.getElementById('password');
const loginBTN = document.getElementById('login');
const signBTN = document.getElementById('signup');
const localData = localStorage.getItem('users') || {};
let userList;

window.onload = () => {
    const adminData = {
        username: "furkan", password: "123456"
    };
    userList = JSON.parse(localStorage.getItem("users") || "[]");
    if (userList.some((user) => user.username === "furkan"))
        return;
    if (userList.length) {
        localStorage.setItem("users", JSON.stringify(userList.concat([adminData])));
    } else
        localStorage.setItem("users", JSON.stringify([adminData]));
};


formDOM.onsubmit = () => { return false }

signBTN.onclick = () => {
    window.location.href = "signup.html";
}

loginBTN.onclick = () => {
    if ((usernameDOM.value != "") && (passwordDOM.value != "")) {
        const user = userList.find(u => u.username === usernameDOM.value)

        if (user) {
            if (user.password === passwordDOM.value) {
                console.log("giris basarili");
                localStorage.setItem('currentUser', usernameDOM.value);
                formDOM.onsubmit = () => { return 1 }
            } else {
                alert('Password not match!');

            }
        } else {
            alert('Username not match!');
        }
    } else {
        if (usernameDOM.value == "") {
            alert('Username is empty!');
        }
        if (passwordDOM.value == "") {
            alert('Password is empty! ');
        }
    }
}