const formDOM = document.getElementById('loginInfo');
const usernameDOM = document.getElementById('username');
const passwordDOM = document.getElementById('password');
const localData = JSON.parse(localStorage?.getItem('users'));

formDOM.addEventListener('submit', (e) => {
    e.preventDefault();

    // Kullanıcı adının mevcut olup olmadığını kontrol ediyoruz.
    const usernameExists = localData.find(u => u.username === usernameDOM.value)
    if (usernameExists) {
        alert('Username already exists!');
        return;
    } if (passwordDOM.value == "") {
        alert('Enter a password!');
        return;
    }
    // Kullanıcıyı localStorage'e ekliyoruz.
    const user = {
        username: usernameDOM.value,
        password: passwordDOM.value,
    };
    if (user) {
        alert('You have successfully signed up!');
        localData.push(user) // listenin sonuna eleman ekle
        localStorage.setItem('users', JSON.stringify(localData));
        window.location.href = 'index.html';
    }

});
