const toggle = document.getElementById('toggle');
const body = document.body;
        
// Check for saved theme preference or respect OS preference
if (localStorage.getItem('theme') === 'light' || 
    (window.matchMedia('(prefers-color-scheme: light)').matches && !localStorage.getItem('theme'))) {
    body.classList.add('light-mode');
    toggle.checked = true;
}
        
// Toggle theme
toggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }
});