const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const span= document.querySelector(".color")


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  
}

span.textContent = "#ffffff";


btn.addEventListener("click", () => {
  const color = getRandomHexColor();
   body.style.backgroundColor = `${color}`;
  span.textContent = `${color}`;
});



