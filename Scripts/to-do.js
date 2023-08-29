const inputBOX = document.getElementById('input-box');
const listCONT = document.getElementById('list-cont');
const currentUser = localStorage.getItem('currentUser');

if (currentUser) {
    document.getElementById('greetings').innerHTML = `${currentUser}'s To-Do List`;
}else {
    window.location.href = "login.html";
}

function addTask() {
    if (inputBOX.value === '') {
        alert("You must write something!");
    } else {
        let liDOM = document.createElement('li');
        liDOM.innerHTML = inputBOX.value;
        listCONT.appendChild(liDOM);

        let spanDOM = document.createElement('span');
        spanDOM.innerHTML = '\u00d7';
        liDOM.appendChild(spanDOM);
    }
    inputBOX.value = "";
    saveData(currentUser);
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = "login.html";
}

listCONT.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData(currentUser);
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData(currentUser);
    }
});

// function displayData(data) {
//     // { check: true, text: "asdasd" }
//     `
//     <li class="checked">
//         asdasd
//         <span>×</span>
//     </li>
//     `
// }

function saveData(currentUser) {
    const todoObject = JSON.parse(localStorage.getItem('todo')) || {};
    todoObject[currentUser] = listCONT.innerHTML.trim();
    localStorage.setItem('todo', JSON.stringify(todoObject));
}

function getData(currentUser) {
    const todoObject = JSON.parse(localStorage.getItem('todo'));
    if (todoObject && todoObject[currentUser]) {
        listCONT.innerHTML = todoObject[currentUser];
    }
}
getData(currentUser);
