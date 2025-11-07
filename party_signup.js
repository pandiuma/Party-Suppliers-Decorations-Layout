document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    name.classList.remove("is-invalid");
    email.classList.remove("is-invalid");
    password.classList.remove("is-invalid");

    if (name.value.trim() === "") {
        name.classList.add("is-invalid");
        isValid = false;
    }


    const emailPattern = /^[^]+@[^]+\.[a-z]{2,3}$/;

    if (!email.value.trim().match(emailPattern)) {
        email.classList.add("is-invalid");
        isValid = false;
    }

    if (password.value.trim().length < 6) {
        password.classList.add("is-invalid");
        isValid = false;
    }

    if (isValid) {
        alert("Signed Up successful!");
        document.getElementById("signupForm").reset();
    }
});