const categoriesNum = document.querySelector("#categories").children.length;
console.log(`Number of categories: ${categoriesNum}`);

const listItem = document.querySelectorAll(".item");

[...listItem].map((el, inx, arr) => { console.log(`Category: ${arr[inx].children[0].textContent}`);
  console.log(`Elements: ${arr[inx].children[1].children.length}`)});
