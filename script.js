function newUserSignUp() {
    const userName = document.getElementById('userNameInput').value;
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('password').value;
    const goalSelect = document.getElementById('goalSelect').value;

    try {
        validateForm(userName, email, password, goalSelect);

        let userSignUp = {
            username: userName,
            email: email,
            password: password,
            goal: goalSelect,
            createdAt: new Date()
        }

        console.log(userSignUp);
        let saveUsers = localStorage.getItem('userSignUp') || '[]';
        let savedUsers2 = JSON.parse(saveUsers);
        checkExistingUser(userName, email, savedUsers2);
        savedUsers2.push(userSignUp);
        localStorage.setItem('userSignUp', JSON.stringify(savedUsers2));
        window.location.href = "./rest of site/index3.html";
    } catch (e) {
        document.getElementById('inCaseOfError').innerHTML = e.message;
    }
}

function checkExistingUser(userName, email, savedUsers2) {
    for (let i = 0; i < savedUsers2.length; i++) {
        let user = savedUsers2[i];
        if (userName == user.username || email == user.email) {
            throw new Error('user name or email already exist');
        }
    }
}

function validateForm(userName, email, password, goalSelect) {
    if (userName.length == 0) {
        throw new Error('You must enter a name');
    }
    if (email.length == 0) {
        throw new Error('You must enter an email');
    }
    if (password.length == 0) {
        throw new Error('You must enter a password');
    }
    if (goalSelect.length == 0) {
        throw new Error('You must select a goal');
    }
}