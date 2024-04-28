document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll("nav ul li a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            const yOffset = -80; // Adjust offset as needed
            const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        });
    });
});
