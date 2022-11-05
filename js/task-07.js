const input = document.querySelector("#font-size-control")
const span = document.querySelector("#text");

console.log(input);
console.log(span);

input.addEventListener("change", () => {
    span.style.fontSize = `${parseInt(input.value)}px`
    
});