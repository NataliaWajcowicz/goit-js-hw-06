const list = document.body.querySelectorAll(".item");

console.log(`Number of categories: ${list.length}`);

const categoryFirst = document.body.childNodes[3].childNodes[1].childNodes[1];

const listFirst = document.body.childNodes[3].childNodes[1].childNodes[3].children

const categorySecond = document.body.childNodes[3].childNodes[3].childNodes[1];

const listSecond = document.body.childNodes[3].childNodes[3].childNodes[3].children

const categoryThird = document.body.childNodes[3].childNodes[5].childNodes[1];

const listThird = document.body.childNodes[3].childNodes[5].childNodes[3].children



console.log(`Category:${categoryFirst.textContent}`);
console.log(`Elements ${listFirst.length}`);
console.log(`Category:${categorySecond.textContent}`);
console.log(`Elements ${listSecond.length}`);
console.log(`Category:${categoryThird.textContent}`);
console.log(`Elements ${listThird.length}`);




