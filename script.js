// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Mobile Navigation Toggle
const menuButton = document.querySelector('.menu-button'); // Hamburger menu button
const navLinks = document.querySelector('.nav-links'); // Navigation links container

if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // Toggles the "show" class for mobile menu
    });
}

// Example Dynamic Welcome Message
const welcomeText = document.querySelector('#welcome-text'); // Replace #welcome-text with the ID of your target element
if (welcomeText) {
    const currentHour = new Date().getHours();
    let greeting = "Welcome!";

    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good Afternoon!";
    } else if (currentHour >= 18 || currentHour < 5) {
        greeting = "Good Evening!";
    }

    welcomeText.textContent = greeting; // Updates the text in the element
}
