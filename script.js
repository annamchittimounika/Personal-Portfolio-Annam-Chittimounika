// --- Mobile Menu Toggle ---
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Change menu icon to 'X'
    navbar.classList.toggle('active'); // Show/Hide the navigation menu
};

// --- ScrollReveal Animations ---
// The ScrollReveal library is included via a CDN link in the HTML head.

// Set up the default animation options
ScrollReveal({
    // reset: true, // Commented out to prevent elements from resetting on every scroll
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Animate the Hero Section
ScrollReveal().reveal('.hero-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.hero-img, .skills-container, .project-box, .contact-form, .timeline-item', { origin: 'bottom' });

// Animate specific elements with different origins
ScrollReveal().reveal('.hero-content h1, .about-content', { origin: 'left' });
ScrollReveal().reveal('.hero-content p, .social-media a', { origin: 'right' });


// --- Active Nav Link on Scroll ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150; // Offset from the top
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' from all links
            navLinks.forEach(links => {
                links.classList.remove('active');
            });

            // Add 'active' to the current section's link
            document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
        }
    });

    // Toggle sticky header on scroll
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Hide mobile menu when a link is clicked or on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};