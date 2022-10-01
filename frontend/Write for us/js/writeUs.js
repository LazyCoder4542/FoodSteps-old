const showPassword = document.querySelector
("#show-password");
const PasswordField = document.querySelector
("#password");


showPassword.addEventListener("click", function(){
    this.classList.toggle("eyeIcon");
    const type = PasswordField.getAttribute("type")
    ==="password" ? "text" : "password";
    PasswordField.setAttribute("type", type)
})