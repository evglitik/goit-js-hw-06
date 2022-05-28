const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const createLiElement = (namesItem) => {
  return namesItem.map((el) => {
    const createLi = document.createElement("li");
    createLi.textContent = el;
    createLi.classList.add("item");
    return createLi;
  });
};

const elements = createLiElement(ingredients);
list.append(...elements);
