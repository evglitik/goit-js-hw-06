const input = document.querySelector("#name-input");
const userOutput = document.querySelector("#name-output");

input.addEventListener("input", (ev) => {
  userOutput.textContent = ev.currentTarget.value;
  if (userOutput.textContent === "") {
    userOutput.textContent = "Anonymus";
  }
});
