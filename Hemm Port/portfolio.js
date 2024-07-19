const header = document.querySelector("header");
window.addEventListener("scroll",function() {
    header.classList.toggle ("sticky",window.scrollY > 100);
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
   
}

function hideSidebar() {
   const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}