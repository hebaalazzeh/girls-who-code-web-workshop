


document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll("nav ul li a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior (page jump)

            // Get the ID of the target section from the href attribute
            const targetId = this.getAttribute("href").substring(1);
            
            // Find the target section by its ID
            const targetSection = document.getElementById(targetId);
            
            // Set the vertical offset (adjust as needed)
            const yOffset = -80;

            // Calculate the vertical position of the target section
            const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

            // Scroll to the target section with smooth behavior
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        });
    });
});

/*document.addEventListener("DOMContentLoaded", function() {...});: This code ensures that the JavaScript is executed after the HTML content has been fully loaded.
const navbarLinks = document.querySelectorAll("nav ul li a");: This line selects all anchor (<a>) elements within list items (<li>) inside the navigation (<nav>) element.
navbarLinks.forEach(link => {...});: This loop iterates over each anchor element found in the navigation.
link.addEventListener("click", function(event) {...});: This sets up a click event listener for each anchor element.
event.preventDefault();: This prevents the default behavior of the anchor element, which is to navigate to a different page.
const targetId = this.getAttribute("href").substring(1);: This line extracts the ID of the target section from the href attribute of the clicked anchor element. The substring(1) removes the "#" character at the beginning of the ID.
const targetSection = document.getElementById(targetId);: This line retrieves the target section element by its ID.
const yOffset = -80;: This variable sets the vertical offset for scrolling. It can be adjusted based on layout and design considerations.
const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;: This calculates the vertical position of the target section relative to the viewport, accounting for any page scrolling.
window.scrollTo({ top: y, behavior: 'smooth' });: This scrolls the page to the calculated vertical position (y) with smooth scrolling behavior.*/


