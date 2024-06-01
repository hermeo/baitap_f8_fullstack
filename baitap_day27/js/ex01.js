var form_login = document.querySelector(".login__register__login");
var form_register = document.querySelector(".login__register__register");
var btn_login = document.querySelector(".btn-login");
var btn_register = document.querySelector(".btn-register");
var login_facebook = document.querySelector(
  ".login__register__google_facebook"
);
var overlay = document.querySelector(".overflow");
var showForm = document.querySelector(".form-login-register");
var icon_close = document.querySelector(".icon-close");
var btn = document.querySelector(".btn");
var inputEmailLogin = document.querySelector("#input-login-email");
var inputEmailLoginError = document.querySelector("#input-login-email-error");
var inputPassLogin = document.querySelector("#input-login-pass");
var inputPassLoginError = document.querySelector("#input-login-pass-error");
var inputNameRegister = document.querySelector("#input-register-name");
var inputEmailRegister = document.querySelector("#input-register-email");
var inputPassRegister = document.querySelector("#input-register-pass");
var inputNameRegisterError = document.querySelector(
  "#input-name-register-error"
);
var inputEmailRegisterError = document.querySelector(
  "#input-email-register-error"
);
var inputPassRegisterError = document.querySelector(
  "#input-pass-register-error"
);
var btn_submit_register = document.querySelector("#form-register");
var register_submit = document.querySelector("#register-submit");
var count_register;
//event show/hidden Pass login
var showPass = document.querySelector(".show-password");
var showPassCopy = showPass.innerHTML;
showPass.addEventListener("click", () => {
  if (showPass.innerHTML.includes(showPassCopy)) {
    document.querySelector("#input-login-pass").type = "text";
    showPass.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
  } else {
    document.querySelector("#input-login-pass").type = "password";
    showPass.innerHTML = showPassCopy;
  }
});
//event show/hidden Pass login
//event show/hidden pass register
var showPassRegister = document.querySelector(".show-register-password");
var showPassRegisterCopy = showPassRegister.innerHTML;
showPassRegister.addEventListener("click", () => {
  if (showPassRegister.innerHTML.includes(showPassRegisterCopy)) {
    document.querySelector("#input-register-pass").type = "text";
    showPassRegister.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
  } else {
    document.querySelector("#input-register-pass").type = "password";
    showPassRegister.innerHTML = showPassRegisterCopy;
  }
});
//event show/hidden pass register
//event reset form login - register
//login
var resetLogin = () => {
  inputEmailLogin.value = "";
  inputEmailLogin.style.borderColor = "";
  inputEmailLoginError.innerText = "";
  inputPassLogin.value = "";
  inputPassLogin.style.borderColor = "";
  inputPassLoginError.innerText = "";
  document.querySelector("#login-submit").innerText = "";
  showPass.innerHTML = showPassCopy;
};
//register
var resetRegister = () => {
  inputNameRegister.value = "";
  inputNameRegisterError.innerText = "";
  inputNameRegister.style.borderColor = "";
  inputEmailRegister.value = "";
  inputEmailRegisterError.innerText = "";
  inputEmailRegister.style.borderColor = "";
  inputPassRegister.value = "";
  inputPassRegisterError.innerText = "";
  inputPassRegister.style.borderColor = "";
  register_submit.innerText = "";
  showPassRegister.innerHTML = showPassRegisterCopy;
};
//event reset form login - register
// show/hidden form login - register
btn.addEventListener("click", () => {
  showForm.style.display = "block";
});
overlay.addEventListener("click", () => {
  showForm.style.display = "none";
});
icon_close.addEventListener("click", () => {
  showForm.style.display = "none";
});
// show/hidden form login - register
var other = document.querySelector("#note");
var otherCopy = other.textContent;
btn_login.classList.add("btn-color");
login_facebook.style.display = "flex";
//change page login - register
//login
form_login.style.display = "flex";
var showFormLogin = () => {
  btn_login.classList.add("btn-color");
  form_login.style.display = "flex";
  login_facebook.style.display = "flex";
  other.innerText = otherCopy;
  resetRegister();
  if (btn_register.classList.contains("btn-color")) {
    btn_register.classList.remove("btn-color");
    form_register.style.display = "none";
  }
};
btn_login.addEventListener("click", showFormLogin);
//register
var showFormRegister = () => {
  btn_register.classList.add("btn-color");
  form_register.style.display = "flex";
  login_facebook.style.display = "none";
  other.innerText = "Hoàn thành đăng ký, và bắt đầu trải nghiệm ngay!";
  resetLogin();
  if (btn_login.classList.contains("btn-color")) {
    btn_login.classList.remove("btn-color");
    form_login.style.display = "none";
  }
};
btn_register.addEventListener("click", showFormRegister);
//change page login - register
//check định dạng email
function checkEmail(str) {
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(str);
}
//check định dạng email
//event blur - login
onBlur = () => {
  var count = 0;
  if (inputEmailLogin.value.trim() === "") {
    inputEmailLoginError.innerText = "Vui lòng nhập thông tin";
    inputEmailLoginError.style.color = "red";

    inputEmailLogin.style.borderColor = "red";
    count = 1;
  }
  if (inputPassLogin.value.trim() === "") {
    inputPassLoginError.innerText = "Vui lòng nhập thông tin";
    inputPassLoginError.style.color = "red";

    inputPassLogin.style.borderColor = "red";
    count = 1;
  }
  if (count == 0) {
    return true;
  } else {
    return false;
  }
};
inputEmailLogin.addEventListener("blur", onBlur);
inputPassLogin.addEventListener("blur", onBlur);
//event blur - login
//event focus - login
var focusLoginEmail = () => {
  var count = 0;
  if (inputEmailLogin.value.trim().length > 0) {
    if (!checkEmail(inputEmailLogin.value.trim())) {
      inputEmailLoginError.innerText = "Chưa đúng định dạng email";
      inputEmailLoginError.style.color = "red";
      inputEmailLogin.style.color = "red";
      inputEmailLogin.style.outline = "none";
      inputEmailLogin.style.borderColor = "red";
      count = 1;
    } else {
      inputEmailLoginError.innerText = "";
      inputEmailLogin.style.color = "black";
      inputEmailLogin.style.outline = "";

      inputEmailLogin.style.borderColor = "";
    }
    onBlur();
  } else {
    onBlur();
    count = 1;
  }
  if (count !== 0) {
    return false;
  } else {
    return true;
  }
};
var focusLoginPass = () => {
  var count = 0;
  if (inputPassLogin.value.trim().length > 0) {
    inputPassLoginError.innerText = "";
    inputPassLogin.style.outline = "";
    inputPassLogin.style.borderColor = "";
    onBlur();
  } else {
    onBlur();
    count = 1;
  }
  if (count !== 0) {
    return false;
  } else {
    return true;
  }
};
inputEmailLogin.addEventListener("focus", () => {
  inputEmailLogin.addEventListener("input", focusLoginEmail);
});
inputPassLogin.addEventListener("focus", () => {
  inputPassLogin.addEventListener("input", focusLoginPass);
});
//event focus - login
//event submit - login
var btn_submit_login = document.querySelector("#form-login");

btn_submit_login.addEventListener("submit", (e) => {
  e.preventDefault();
  if (onBlur() && focusLoginEmail() && focusLoginPass) {
    document.querySelector("#login-submit").innerText = "Đăng nhập thành công";
    document.querySelector("#login-submit").style.color = "green";
  } else {
    return;
  }
});
//event submit - login
//form register
//event blur - register
var onFocus_register = () => {
  count_register = 0;
  if (inputNameRegister.value.trim() === "") {
    inputNameRegisterError.innerText = "Vui Lòng nhập thông tin";
    inputNameRegisterError.style.color = "red";
    inputNameRegister.style.borderColor = "red";
    count_register = 1;
  }
  if (inputEmailRegister.value.trim() === "") {
    inputEmailRegisterError.innerText = "Vui Lòng nhập thông tin";
    inputEmailRegisterError.style.color = "red";
    inputEmailRegister.style.borderColor = "red";
    count_register = 1;
  }
  if (inputPassRegister.value.trim() === "") {
    inputPassRegisterError.innerText = "Vui Lòng nhập thông tin";
    inputPassRegisterError.style.color = "red";
    inputPassRegister.style.borderColor = "red";
    count_register = 1;
  }
  if (count_register !== 0) {
    return false;
  } else {
    return true;
  }
};
inputNameRegister.addEventListener("blur", onFocus_register);
inputEmailRegister.addEventListener("blur", onFocus_register);
inputPassRegister.addEventListener("blur", onFocus_register);
//event blur - register
//event focus - register
var focusRegisterName = () => {
  var count = 0;
  if (inputNameRegister.value.trim().length > 0) {
    inputNameRegister.style.borderColor = "";
    inputNameRegisterError.innerText = "";
    //email

    onFocus_register();
  } else {
    onFocus_register();
    count = 1;
  }
  if (count !== 0) {
    return false;
  } else {
    return true;
  }
};
inputNameRegister.addEventListener("focus", () => {
  inputNameRegister.addEventListener("input", focusRegisterName);
});
var focusRegisterEmail = () => {
  var count = 0;
  if (inputEmailRegister.value.trim().length > 0) {
    if (!checkEmail(inputEmailRegister.value.trim())) {
      inputEmailRegisterError.innerText = "Vui lòng nhập đúng định dạng email";
      inputEmailRegisterError.style.color = "red";
      inputEmailRegister.style.borderColor = "red";

      onFocus_register();
      count = 1;
    } else {
      inputEmailRegisterError.innerText = "";
      inputEmailRegisterError.style.color = "";
      inputEmailRegister.style.borderColor = "";
      inputEmailRegister.style.color = "";
    }
  } else {
    onFocus_register();
    count = 1;
  }
  if (count !== 0) {
    return false;
  } else {
    return true;
  }
};
inputEmailRegister.addEventListener("focus", () => {
  inputEmailRegister.addEventListener("input", focusRegisterEmail);
});
var focusRegisterPass = () => {
  var count = 0;
  if (inputPassRegister.value.trim().length > 0) {
    if (
      inputPassRegister.value.trim().length < 6 ||
      inputPassRegister.value.trim().length > 20
    ) {
      inputPassRegisterError.innerText = "Mật khẩu tối thiểu 6 - 20 ký tự";
      inputPassRegisterError.style.color = "red";
      inputPassRegister.style.borderColor = "red";
      inputPassRegister.style.color = "red";
      onFocus_register();
      count = 1;
    } else {
      inputPassRegisterError.innerText = "";
      inputPassRegisterError.style.color = "";
      inputPassRegister.style.borderColor = "";
      inputPassRegister.style.color = "";
    }
  } else {
    onFocus_register();
    count = 1;
  }
  if (count !== 0) {
    return false;
  } else {
    return true;
  }
};
inputPassRegister.addEventListener("focus", () => {
  inputPassRegister.addEventListener("input", focusRegisterPass);
});
//event focus - register
//event submit - register
btn_submit_register.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    onFocus_register() &&
    focusRegisterName() &&
    focusRegisterEmail() &&
    focusRegisterPass()
  ) {
    register_submit.innerText = "Đăng ký thành công";
    register_submit.style.color = "green";
  } else {
    return;
  }
});
//event submit - register
