document.addEventListener('DOMContentLoaded', () => {
    // Select the necessary elements 
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Add click event listener to the hamburger button
    menuToggle.addEventListener('click', () => {
        // Toggle the 'active' class on the navigation menu
        navMenu.classList.toggle('active');
        
        // Optional: Toggle the icon between bars (☰) and times (X)
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});
