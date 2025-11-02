document.addEventListener('DOMContentLoaded', () => {

    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    function toggleMenu() {
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    }

    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }

    if (mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    }

});

