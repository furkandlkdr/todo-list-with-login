const formDOM = document.getElementById('loginInfo');
const usernameDOM = document.getElementById('username');
const passwordDOM = document.getElementById('password');
const loginBTN = document.getElementById('login');
const signBTN = document.getElementById('signup');
const localData = localStorage?.getItem('users');
let userList;

window.onload = () => {
    const adminData = { username : 'furkan', password : '123456'};
    if (JSON.stringify(localData).includes('furkan')){
        console.log (`1localdata: ${localData} adminData: ${adminData}`)
        userList = JSON.parse(localStorage.getItem('users'));
    }   else if (localData){
        localStorage.setItem('users', localData + JSON.stringify(adminData));
        userList = JSON.parse(localStorage.getItem('users'));
        console.log (`2localdata: ${localData} adminData: ${adminData}`)
    }   else {
        localStorage.setItem('users', JSON.stringify(adminData))
        userList = JSON.parse(localStorage.getItem('users'));
        console.log (`3localdata: ${localData} adminData: ${adminData}`)
    }
}

formDOM.onsubmit = ()=> {return false}

loginBTN.onclick = () => {
    if ((usernameDOM.value != "") && (passwordDOM.value != "")) {
        if (userList.username === usernameDOM.value.toString()) {
            if (userList.password === passwordDOM.value.toString()) {
                console.log("giris basarili");
                localStorage.setItem('currentUser', usernameDOM.value.toString());
                formDOM.onsubmit = ()=> {return 1}
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
// const userList = localStorage.getItem('users');
// console.log('test2');
// onAuthStateChanged(auth, user => {
//     if (user != null)
//         console.log('logged in!');
//     else
//         console.log('no user');
// })

    // const infos = userList.foreach((users, ) => {
    //     if (users.username.toString() == usernameDOM.toString()){
    //         if (users.password.toString() == passwordDOM.toString()){
    //             console.log('Giris basarili');
    //             return {
    //                 username : users.username,
    //                 password : users.password,
    //             }
    //         }
    //     }
    // });
    // if (!infos)
    //     alert('Bu bilgilere sahip bir kullanici yok!');
// });