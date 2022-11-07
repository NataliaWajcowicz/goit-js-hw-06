const input = document.querySelector("#font-size-control")
const span = document.querySelector("#text");

console.log(input);
console.log(span);

span.style.fontSize= `${parseInt(input.value)}px`


input.addEventListener("input", () => {
    span.style.fontSize = `${parseInt(input.value)}px`
    
});