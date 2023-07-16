// ẩn hiện navbar
const el = document.querySelector(".sub-menu");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
  el.style.removeProperty("display");
  el.classList.toggle("active");
});

close.addEventListener("click", () => {
  el.style.display = "none";
});

const formElement = document.getElementById("form-login");
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmitLogin(e);
});
function handleSubmitLogin() {
  const displayElement = document.querySelector(".display-userlogin");
  let displayName = " ";
  const userForm = getDataForm();
  const accountDB = getDataLocal();
  let userLogIn = accountDB.find((user) => {
    if (user.email == userForm.email && user.password == userForm.password) {
      return true;
    }
  });
  if (userLogIn) {
    console.log(userLogIn);
    displayName = `<li>
          ${userLogIn.firstName} ${userLogIn.lastName}
          </li>
          <li>
            <a href=""><i class="fa-solid fa-magnifying-glass search"></i></a>
          </li>
          <li>
            <a href="./my-cart.html">
              <i class="fa-solid fa-cart-shopping"> </i
            ></a>
          </li>
          <li onclick="handleLogout()"> LOGOUT</li>`;
    delete userLogIn.password;
    localStorage.setItem("userLogin", JSON.stringify(userLogIn));
    localStorage.setItem("isLogIn", true);
    displayElement.innerHTML = displayName;
    window.location = "/index.html";
  } else {
    alert("Email hoặc mật khẩu không đúng");
   }  
}

function getDataForm() {
  const emailValue = document
    .getElementById("email")
    .value.toLowerCase()
    .trim();
  const passwordValue = document.getElementById("password").value;
  const userForm = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(userForm);
  return userForm;
}
function getDataLocal() {
  const data = JSON.parse(localStorage.getItem("accountDB"));
  return data;
}

function handleLogout() {
  localStorage.removeItem("userLogin");
  window.location = "/index.html";
}
// const logout = document.querySelector('#logout')
// logout.addEventListener("click", () => {
//  localStorage.removeItem("userLogin");
//  window.location = "/index.html";
// });
