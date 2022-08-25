let listAccount = [
    {
        username: "admin",
        password: "admin"
    },{
        username: "admin1",
        password: "admin"
    }
]
let isLogin = !!localStorage.getItem("token")

function CheckLogin(){
    if(isLogin){
        window.location.href = "case.html"
    }
}

function Login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let checkLogin = listAccount.some(value => value.username === username && value.password === password)
    if (checkLogin){
        localStorage.setItem("token",username)
        isLogin = true
        CheckLogin()
    }else {
        alert("wrong username or password")
    }
}