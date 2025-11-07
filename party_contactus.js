document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const contact = document.getElementById("contact");
    const message = document.getElementById("message");

    [name, email, contact, message].forEach(input => {
        input.classList.remove("is-invalid");
    });

    if (name.value.trim() === "") {
        name.classList.add("is-invalid");
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.trim().match(emailPattern)) {
        email.classList.add("is-invalid");
        isValid = false;
    }

    const contactPattern = /^[0-9]{10,15}$/;
    if (!contact.value.trim().match(contactPattern)) {
        contact.classList.add("is-invalid");
        isValid = false;
    }

    if (message.value.trim() === "") {
        message.classList.add("is-invalid");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    }
});