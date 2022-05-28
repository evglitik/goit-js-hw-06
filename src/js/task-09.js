const body = document.querySelector("body");
const buttonChangeColor = document.querySelector(".change-color");
const textColorName = document.querySelector(".color");

buttonChangeColor.addEventListener("click", changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  textColorName.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
