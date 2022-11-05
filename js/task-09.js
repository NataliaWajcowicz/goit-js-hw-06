const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const span= document.querySelector(".color")


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  
}


const color = getRandomHexColor();


btn.addEventListener("click", () => {
  body.style.backgroundColor = `${color}`;
  span.textContent = `${color}`;
})
