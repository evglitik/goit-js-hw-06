function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const generalElement = document.getElementById("boxes");
const input = document.getElementById("controls").firstElementChild;
const btnCrete = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

btnCrete.addEventListener("click", () => createBoxes(input.value));
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const arrayNewElements = [];

  for (let i = 0; i < amount; i++) {
    let sizeElement = (i + 3) * 10;

    arrayNewElements.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${sizeElement}px; height: ${sizeElement}px; margin: 3px; border-radius: 4%"></div>`
    );
  }

  generalElement.insertAdjacentHTML("beforeend", arrayNewElements.join(""));
}

function destroyBoxes() {
  generalElement.innerHTML = "";
}

generalElement.classList.add("random-boxes-flex");
