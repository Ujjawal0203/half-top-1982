document.getElementById("form").addEventListener("submit", userData);

function userData() {
  event.preventDefault();

  let obj = {
    first_name: form.f_name.value,
    last_name: form.l_name.value,
    Email: form.email.value,
    phone: form.phone.value,
    password: form.password.value,
    Confirm: form.c_password.value,
  };
  console.log(obj);

  if (obj.password === obj.Confirm) {
    localStorage.setItem("UserDetail", JSON.stringify(obj));
    window.location.href = "login.html";
  } else {
    alert("Password not match!");
  }

}


