// Scroll Event for Navbar Visibility
const navbar = document.getElementById('navbar');

// Add class to navbar when user scrolls past 100px
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {  // Scroll position at which navbar will show
        navbar.style.top = '0';  // Make the navbar visible
    } else {
        navbar.style.top = '-60px'; // Hide the navbar when scrolled back to the top
    }
});
<script>forhtml
    // Change the background image on scroll
    const body = document.body;

    window.addEventListener('scroll', () => {
      const scrollHeight = window.scrollY; // Current scroll position
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height

      if (scrollHeight >= totalHeight) {
        // When the user scrolls to the bottom, change the background
        body.style.background = "url('https://via.placeholder.com/1920x1080?text=Background+Image+2') no-repeat center center fixed";
        body.style.backgroundSize = "cover";
      } else {
        // Reset to the initial background when not at the bottom
        body.style.background = "url('https://via.placeholder.com/1920x1080?text=Background+Image+1') no-repeat center center fixed";
        body.style.backgroundSize = "cover";
      }
    });
  </script>