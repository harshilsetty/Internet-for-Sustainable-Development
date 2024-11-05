// Simple animation effects on scroll
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

cards.forEach(card => {
    observer.observe(card);
});

// Add animations via CSS
document.addEventListener("DOMContentLoaded", () => {
    const animateClass = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate {
            animation: fadeIn 1s forwards;
        }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = animateClass;
    document.head.appendChild(styleSheet);
});
