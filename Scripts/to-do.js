const inputBOX = document.getElementById('input-box');
const listCONT = document.getElementById('list-cont');
const currentUser = localStorage.getItem('currentUser');

if (currentUser) {
    document.getElementById('greetings').innerHTML = `${currentUser}'s To-Do List`;
} else {
    window.location.href = "index.html";
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
    window.location.href = "index.html";
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

function saveData(currentUser) {
    const todoObject = JSON.parse(localStorage.getItem('todo')) || {};
    const liElement = document.querySelectorAll('li');
    const object = [];
    for (const element of liElement) {
        const value = element.innerHTML.trim();
        const isChecked = element.classList.contains("checked");
        object.push({
            value,
            isChecked,
        })
    }
    todoObject[currentUser] = object;
    localStorage.setItem('todo', JSON.stringify(todoObject));
}

function getData(currentUser) {
    const todoObject = JSON.parse(localStorage.getItem('todo'));
    console.log(todoObject)
    if (todoObject && todoObject[currentUser]) {
        for (const li of todoObject[currentUser]) {
            const liNode = document.createElement('li');
            if (li.isChecked)
                liNode.classList.add('checked');
            liNode.innerHTML = li.value;
            listCONT.appendChild(liNode);
        }
    }
}
getData(currentUser);
