
const categoriesNum = document.querySelector("#categories").children.length;

console.log(`Number of categories: ${categoriesNum}`);

const listItem = document.querySelectorAll(".item");

const categoriNameAndCauntItem = (listItem) => {
  for (let i = 0; i < categoriesNum; i++) {
    console.log(`Category: ${listItem[i].children[0].textContent}`);
    console.log(`Elements: ${listItem[i].children[1].children.length}`);
  }
};

categoriNameAndCauntItem(listItem);
