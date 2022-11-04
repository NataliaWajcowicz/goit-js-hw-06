const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("ul#ingredients");
console.log(list);

for (const ingredient of ingredients) {  
  const item = document.createElement("li");
  item.textContent = ingredient;  
  list.append(item); 
}


