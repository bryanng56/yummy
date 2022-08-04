/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.main-menu__link');

const linkAction = () => {
    const navMenu = document.getElementById('main-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction))