// Typing Effect
const text = "Empowering Your Health";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

// Dark Mode Toggle 
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        themeToggle.innerHTML = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.innerHTML = "🌙";
        localStorage.setItem("theme", "light");
    }
});

// Applying saved theme on page load
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        themeToggle.innerHTML = "☀️";
    }
    typeEffect();
};
