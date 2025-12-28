const loggedInUserString = sessionStorage.getItem('loggedInUser');
let loggedInUser = JSON.parse(loggedInUserString);

if (!loggedInUser) {
    window.location.href = "./index2.html";
}

const goal = loggedInUser.goal;

document.getElementById('h1').innerHTML += ' ' + loggedInUser.username;
document.getElementById('h2').innerHTML += ' ' + goal;

function showContent() {
    let hours = document.getElementById('input').value;
    document.getElementById('showContent').innerHTML = '';
    for (let i = 0; i < hours; i++) {
        document.getElementById('showContent').innerHTML += `<div>Random task number ${i + 1}</div>`;
    }
}

function logout() {
    window.location.href = "./index2.html";
    sessionStorage.removeItem("loggedInUser");
}