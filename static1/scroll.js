const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const toggle_wrapper = document.querySelector('.toggle-wrapper');

// Function to check scroll position and toggle class
function handleScroll() {
  // Get the current vertical scroll position
  const scrollY = window.scrollY;

  // Define a trigger point (e.g., 50 pixels)
  const triggerPoint = 100;

  // Check if scrolled past the trigger point
  if (scrollY > triggerPoint) {
    header.classList.add('scrolled');
    logo.classList.add('scrolled')
    toggle_wrapper.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled');
    logo.classList.remove('scrolled')
    toggle_wrapper.classList.remove('scrolled')
  }
}

// Listen for the scroll event and run the handleScroll function
window.addEventListener('scroll', handleScroll);

// Optional: Run it once on page load in case the page is reloaded while scrolled down
handleScroll();