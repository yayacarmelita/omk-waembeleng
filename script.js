// =========================================================================
// Mobile Menu Toggle
// =========================================================================
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Close menu when clicking outside or on a link
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('show');
    }
});

const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        
        // simple active state toggling
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// =========================================================================
// Simple Routing / Section Toggling
// =========================================================================
// For a vanilla SPA, we can handle hash changes to show/hide sections
window.addEventListener('hashchange', handleRouting);
window.addEventListener('load', handleRouting);

function handleRouting() {
    let hash = window.location.hash || '#beranda';
    
    // In a real SPA, this would hide all sections and show the active one.
    // For now, it just scrolls to it if it exists or we can inject content dynamically.
    // Since we are building sections one by one, we will prepare the logic here.
    console.log("Navigated to:", hash);
}
