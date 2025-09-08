const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const toggle_wrapper = document.querySelector('.toggle-wrapper');


function handleScroll() {
  const scrollY = window.scrollY;

  const triggerPoint = 100;

  if (scrollY > triggerPoint && window.innerWidth > 600) {
    header.classList.add('scrolled'); 
    logo.classList.add('scrolled');
    toggle_wrapper.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    logo.classList.remove('scrolled');
    toggle_wrapper.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll();
