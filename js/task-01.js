const categoriesNum = document.querySelector("#categories").children.length;
console.log(`Number of categories: ${categoriesNum}`);

const listItem = document.querySelectorAll(".item");

[...listItem].map((el, inx, arr) => { console.log(`Category: ${arr[inx].firstElementChild.textContent}`);
  console.log(`Elements: ${arr[inx].lastElementChild.children.length}`);});
