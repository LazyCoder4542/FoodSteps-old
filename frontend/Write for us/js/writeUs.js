const showPassword = document.querySelector
("#show-password");
const PasswordField = document.querySelector
("#password");
const showPassword2 = document.querySelector
("#show-password2");
const PasswordField2 = document.querySelector
("#password2");


showPassword.addEventListener("click", function(){
    this.classList.toggle("eyeIcon");
    const type = PasswordField.getAttribute("type")
    ==="password" ? "text" : "password";
    PasswordField.setAttribute("type", type)
})

showPassword2.addEventListener("click", function(){
    this.classList.toggle("eyeIcon");
    const type = PasswordField2.getAttribute("type")
    ==="password" ? "text" : "password";
    PasswordField2.setAttribute("type", type)
})