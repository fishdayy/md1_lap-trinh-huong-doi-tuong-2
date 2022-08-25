function signup(e){
    event.preventDefault();
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("confirmPassword").value

    let user = {
        username : username,
        email : email,
        password : password,
        confirmPassword : confirmPassword,
    }
    let json = JSON.stringify(user);
    if (user.password === user.confirmPassword){
        localStorage.setItem(username,json);
        alert('thanh cong')
    }else {
        alert('mat khau khong khop')
    }

}