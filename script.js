let login = document.getElementById('login')
let loginError = document.getElementById('login-error')
let name = document.getElementById('name')
let nameError = document.getElementById('name-error')
let surname = document.getElementById('surname')
let surnameError = document.getElementById('surname-error')
let email = document.getElementById('email')
let emailError = document.getElementById('email-error')
let password = document.getElementById('password')
let passwordError = document.getElementById('password-error')
const loginRegex = /^[a-z][a-z0-9._]{4,17}$/;
const emailRegex = /^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/;
const nameSurnameRegex = /^[A-Z][a-z]+$/;
const passwordRegex = /^[a-zA-Z0-9._]{8,18}$/;

login.addEventListener('input', (ev) => {
    if (loginRegex.test(ev.target.value)) {
        loginError.innerText = '';
    } else {
        loginError.innerText = 'Логин должен быть от 5 до 18 символов, начинаться с маленькой буквы и содержать только латинские буквы, цифры, точку или подчеркивание.';
    }
});
email.addEventListener('input',(ev) =>{
    if(emailRegex.test(ev.target.value))
    {
        emailError.innerText = '';
    }
    else{
        emailError.innerText = 'Email должен начинаться с маленькой буквы, содержать только латинские буквы, цифры, точку или специальные символы (@, ., -, _), не должно быть пробелов или кириллицы, и должна быть точка перед доменом.';
    }
})
name.addEventListener('input',(ev) =>{
    if(nameSurnameRegex.test(ev.target.value))
    {
        nameError.innerText = '';
    }
    else{
        nameError.innerText = 'Имя должно начинаться с заглавной буквы, содержать только латинские буквы, не должно содержать пробелов, цифр или символов.';
    }
})
surname.addEventListener('input',(ev) =>{
    if(nameSurnameRegex.test(ev.target.value))
    {
        surnameError.innerText = '';
    }
    else{
        surnameError.innerText = 'Фамилия должна начинаться с заглавной буквы, содержать только латинские буквы, не должно содержать пробелов, цифр или символов.';
    }
})
password.addEventListener('input',(ev) =>{
    if(passwordRegex.test(ev.target.value))
    {
        passwordError.innerText = '';
    }
    else{
        passwordError.innerText = 'Пароль должен содержать от 8 до 18 символов, включать только латинские буквы, цифры, точку или нижнее подчеркивание, и не содержать специальных символов, пробелов или кириллицы.';
    }
})

document.getElementById('registration-form').addEventListener('submit', (ev)=> {
    if (!loginRegex.test(login.value)) {
        loginError.innerText = 'Логин не соответствует правилам.';
        ev.preventDefault(); 
    }
});


