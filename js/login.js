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
////////////////////////////////
// User đã bị inactive sẽ không đăng nhập được

function handleSubmitLogin() {
  const dataLocal = JSON.parse(localStorage.getItem("accountDB"));
  // dataLocal.forEach((element) => {
    const displayElement = document.querySelector(".display-userlogin");
    let displayName = " ";
    const userForm = getDataForm();
    console.log(userForm);
    const accountDB = getDataLocal();
    console.log(userForm.email, userForm.password);
    // console.log(user.email, user.password);
    console.log(accountDB);
    let userLogIn = accountDB.find(
      (user) =>
        user.email === userForm.email && user.password == userForm.password
    );
    console.log(userLogIn);
    if (userLogIn) {
      if (userLogIn.active === false) {
        alert("Tài khoản cuả bạn đã bị khóa.");
        return;
      } else {
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
      }                      
    } else {
      alert("Mật khẩu hặc email không đúng.")
     
      return;
    }
  // });
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

