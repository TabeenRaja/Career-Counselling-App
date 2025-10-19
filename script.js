//Password encryption and view
const togglePassword = document.querySelector("#eyeIcon");
const password = document.querySelector("#pass");

togglePassword.addEventListener("click", () => {
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  if (togglePassword.classList.contains("fa-eye-slash")) {
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  } else {
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  }
});


//Sign up here
const signup=document.querySelector("#SUP");

signup.addEventListener("click",()=>{

}
)





