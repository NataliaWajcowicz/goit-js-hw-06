const list = [...document.body.querySelectorAll(".item")];

console.log(`Number of categories: ${list.length}`);

const listItems = [...document.querySelectorAll("li.item")];



listItems.forEach((listItem) => {
    const title = listItem.querySelector("h2");
    console.log(`Category: ${title.textContent}`)
    const items = [...listItem.querySelectorAll("li")];
    console.log(`Elements: ${ items.length }`)
})




