function signIn() {
    try {
        let isUserFound = false;
        const userOrEmail = document.getElementById('userNameOrEmailInput').value;
        const password = document.getElementById('password').value;
        let usersString = localStorage.getItem('userSignUp') || '[]';
        let users = JSON.parse(usersString);
        validateForm(userOrEmail, password);
        let userFound;
        for (let i = 0; i < users.length; i++) {
            let user = users[i];
            if (userOrEmail == user.username || userOrEmail == user.email) {
                isUserFound = true;
                userFound = users[i];
            }
        }
        if (isUserFound) {
            if (userFound.password == password) {
                sessionStorage.setItem('loggedInUser', JSON.stringify(userFound));
                console.log(userOrEmail);
                window.location.href = "./index3.html";
                return;
            }
        }
        
        throw new Error('user name or email or password are not correct!');

    } catch (e) {
        document.getElementById('inCaseOfError').innerHTML = e.message;
    }
}

function validateForm(userName, password) {
    if (userName.length == 0) {
        throw new Error('You must enter a name');
    }
    if (password.length == 0) {
        throw new Error('You must enter a password');
    }
}