document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    email.classList.remove("is-invalid");
    password.classList.remove("is-invalid");

    const emailPattern =/^[^]+@[^]+\.[a-z]{2,3}$/;

if (!email.value.trim().match(emailPattern)) {
    email.classList.add("is-invalid");
    isValid = false;
}

if (password.value.trim().length < 6) {
    password.classList.add("is-invalid");
    isValid = false;
}

if (isValid) {
    alert("Login successful!");
    document.getElementById("loginForm").reset();
}
    });