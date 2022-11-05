const input = document.querySelector("#validation-input");
const maxLength = parseInt(input.getAttribute("data-length"));
console.log(maxLength);
let text = 0;



input.addEventListener("input", (event) => {
    text = event.currentTarget.value;

    return text;
    
})

input.addEventListener("blur", () => {
    if (text.length > maxLength) {
        input.classList.toggle("invalid")
    } 
    
    input.classList.toggle("valid")
})



    