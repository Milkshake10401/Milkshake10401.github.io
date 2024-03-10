document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    var mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    var mobileMenu = document.getElementById('menu');

    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
