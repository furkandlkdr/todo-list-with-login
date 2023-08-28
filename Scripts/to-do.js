const inputBOX = document.getElementById('input-box');
const listCONT = document.getElementById('list-cont');
const currentUser = localStorage.getItem('currentUser');

if (currentUser){
    document.getElementById('greetings').innerHTML = `${currentUser}'s To-Do List`
}

function addTask(){
    if(inputBOX.value === '')
        alert("You must write something!");
    else{
        let liDOM = document.createElement('li');
        liDOM.innerHTML = inputBOX.value;
        listCONT.appendChild(liDOM);

        let spanDOM = document.createElement('span');
        spanDOM.innerHTML = '\u00d7';
        liDOM.appendChild(spanDOM);
    }
    inputBOX.value = "";
    saveData( /*username*/ );
}

function logout(){

    localStorage.removeItem('currentUser');
    window.location.href = "login.html";

}

listCONT.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData( /*username*/ );
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData( /*username*/ );
    }
}, false);

function saveData( /*username*/ ){
    // localStorage.setItem(`${username}.todo`, listCONT.innerHTML)
    localStorage.setItem(`todo`, listCONT.innerHTML)
}
function getData( /*username*/ ){
    // listCONT.innerHTML = localStorage.getItem(`${username}.todo`);
    listCONT.innerHTML = localStorage.getItem(`todo`);
}
getData();
