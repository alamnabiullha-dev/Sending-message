document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let mailBody = `
Name: ${name}
Email: ${email}
Number: ${number}

Message:
${message}
    `;

    fetch("https://formspree.io/f/mnjnnvzw", {
        method: "POST",
        headers: {
            "Accept": "application/json"
        },
        body: new FormData(this)
    })
    .then(response => {
        if (response.ok) {
            alert("✅ Message sent successfully!");
            this.reset();
        } else {
            alert("❌ Failed to send message");
        }
    })
    .catch(() => {
        alert("❌ Network error");
    });
});
