// Simple animation effects on scroll
const cards = document.querySelectorAll('.card');

// Intersection Observer to animate cards when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
});

// Observe all card elements
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

// Newsletter subscription form handling (optional)
// Uncomment the code below to implement a basic form handling (no backend)

// document.getElementById('newsletter').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const email = this.querySelector('input[type="email"]').value;
//     alert(`Thank you for subscribing with ${email}!`);
//     this.reset(); // Reset the form
// });
