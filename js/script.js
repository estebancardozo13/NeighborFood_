// Menu para dispositivos moviles
const openMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');
const closeMenuElement = document.getElementById('main-menu__close')

openMenuElement.addEventListener('click', ()=> {
    mainMenuElement.classList.toggle('main-menu--show');
});

closeMenuElement.addEventListener('click', ()=> {
    mainMenuElement.classList.toggle('main-menu--show');
});
