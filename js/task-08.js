const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    const user = {
        email: email.value,
        password: password.value,
    }


    if (email.value === "" || password.value === "") {
        alert("Fill all fields!");
        
    } else {
        console.log(user);
    }

    
    event.currentTarget.reset();

}


