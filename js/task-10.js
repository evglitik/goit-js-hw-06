function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const generalElement = document.getElementById("boxes");
const input = document.getElementById("controls").firstElementChild;
const btnCrete = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

generalElement.classList.add("random-boxes-flex");

let quantyti = 0;
input.addEventListener(
  "change",
  (event) => (quantyti = event.currentTarget.value)
);

btnCrete.addEventListener("click", () => createBoxes(quantyti));
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const arrayNewElements = [];

  for (let i = 0; i < quantyti; i++) {
    let sizeElement = (i + 3) * 10;
    
    arrayNewElements.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${sizeElement}px; height: ${sizeElement}px; margin: 3px;"></div>`
    );
  }

  generalElement.insertAdjacentHTML("beforeend", arrayNewElements.join(""));
}

function destroyBoxes() {
  console.log("destoy");
  generalElement.innerHTML = "";
}
