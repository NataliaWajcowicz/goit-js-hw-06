
const div = document.querySelector("#counter");
const minusBtn = div.firstElementChild;
console.log(minusBtn);
const plusBtn = div.lastElementChild;
console.log(plusBtn);
const span = document.querySelector("#value");
console.log(counter);


minusBtn.addEventListener("click", () => {
    let counterValue = parseInt(span.textContent);
    span.textContent = counterValue - 1;
});

plusBtn.addEventListener("click", () => {
    let counterValue = parseInt(span.textContent);
    span.textContent = counterValue + 1;
});