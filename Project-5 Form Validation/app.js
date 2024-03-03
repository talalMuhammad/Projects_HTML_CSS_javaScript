let loginBtn = document.querySelector("#loginBtn");

let nameInput = document.querySelector("#nameInput");

let nameError = document.querySelector("#nameError");

let passwordInput = document.querySelector("#passwordInput");

let passwordError = document.querySelector("#passwordError");

loginBtn.addEventListener("click", (e) => {
  if (nameInput.value === "") {
    nameError.innerHTML = "User Name is Empty";

    if (passwordInput.value === "") {
      passwordError.removeAttribute("class");
      passwordError.innerHTML = "Password is Empty";
    } else {
      passwordError.innerHTML = "";
    }
  } else {
    nameError.innerHTML = "";

    if (passwordInput.value === "") {
      passwordError.removeAttribute("class");
      passwordError.innerHTML = "Password is Empty";
    } else {
      passwordError.setAttribute("class", "submit");

      passwordError.innerHTML = "Loggin Successfull";

      nameInput.value = "";
      passwordInput.value = "";
    }
  }
});
