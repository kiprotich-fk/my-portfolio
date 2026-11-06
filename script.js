// Mobile navigation menu
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
}

// Contact form demonstration
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("formMessage").textContent =
        "Thank you! Your message has been received in this demo.";

    this.reset();
});