const nav = document.getElementById("navLinks");
const menuButton = document.querySelector(".menu-btn");
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

function toggleMenu() {
    if (!nav || !menuButton) return;

    nav.classList.toggle("show");
    const isOpen = nav.classList.contains("show");
    menuButton.setAttribute("aria-expanded", String(isOpen));
}

if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);

    nav?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("show");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

const yearNode = document.getElementById("year");
if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
}

if (form && formMessage) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        formMessage.textContent = "Thank you! Your message has been received in this demo.";
        form.reset();
    });
}