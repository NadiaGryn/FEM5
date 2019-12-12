const pass1 = document.querySelector(`#pass1`);
const pass2 = document.querySelector(`#pass2`);
const button = document.querySelector(`.btn`);
const icons = document.querySelectorAll(`.icon-password`);

button.addEventListener(`click`, () => {
  let value1 = pass1.value;
  let value2 = pass2.value;

  if (value1 === value2) {
    alert(`You are welcome`);
  } else {
    const span = document.createElement(`span`);
    span.innerText = `Enter the same passwords, please!`;
    span.style.color = `red`;
    button.before(span);
  }
})

icons.forEach(icon => {
  icon.addEventListener("click", () => {

    const input = event.target.parentNode.childNodes[1];
    if (input.type === "password") {
      input.type = "text";
      event.target.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      input.type = "password";
      event.target.classList.replace("fa-eye-slash", "fa-eye");
    }

  })
});