const button = document.querySelector('.sidebar_logo_container')
const sidebar = document.querySelector('.sidebar')

function show_sidebar() {
    style = window.getComputedStyle(sidebar);
    if (style.getPropertyValue('display') == 'none'){
        sidebar.style.display = 'block';
    } else{
        sidebar.style.display = 'none'
    };
}
