const input = document.querySelector("#validation-input");
const maxLength = parseInt(input.getAttribute("data-length"));






input.addEventListener("change", (event) => {
    const text = event.currentTarget.value;
    input.classList.add("valid");
    input.classList.remove("invalid")
    if (text.length > maxLength) {
        input.classList.add("invalid")
    };
    
    
    
})





    