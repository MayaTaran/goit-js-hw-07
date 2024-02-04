const loginForm = document.querySelector(".login-form");
//console.log(loginForm);
function formHandler(event) {
    event.preventDefault();
    const data = {
        email: event.target.email.value.trim( ),
        password:event.target.password.value.trim( )
    }
    if (data.email===""|| data.password === "") {
        alert('All form fields must be filled in')
    }
    else{
    console.log(data);
    loginForm.reset();
}}

loginForm.addEventListener("submit", formHandler)