let userData=JSON.parse(localStorage.getItem("UserDetail"));
// console.log(userData)
document.getElementById("form").addEventListener("submit",loginUser);

function loginUser(){
    event.preventDefault()

    let obj={
        email:form.email.value,
        password:form.password.value
    }
        console.log(obj)
    if(obj.email===userData.Email && obj.password===userData.password){
        alert("Login Successfull")
         window.location.href="index.html"
    }else{
        alert("Invalid Credintial");
    
    }

   
}

function returnFunc(){
    window.location.href="register.html"
}
