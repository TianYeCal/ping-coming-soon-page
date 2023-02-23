const form = document.querySelector(".sign-form");
const email = document.getElementById("email");
const inputControl = document.querySelector(".input-control");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
});
const setError = function (message) {
  const errorDisplay = document.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const validateEmail = () => {
  const emailValue = email.value.trim();
  if (emailValue === "") {
    setError("Whoops! It looks like you forgot to add your email");
  } else if (!isValidEmail(emailValue)) {
    setError("Provide a valid email address");
  }
};
