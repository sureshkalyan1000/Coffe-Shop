// menuIcon

let menuItem = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuItem.onclick = () => {
    menuItem.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
