const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('mobile-menu')[0];
const inactiveOverlay = document.getElementsByClassName('inactive-overlay')[0];

toggleButton.addEventListener('click', () => {
  console.log("menu clicked");
  navbarLinks.classList.toggle('menu-active');
  inactiveOverlay.classList.toggle('menu-active');
  toggleButton.classList.toggle('menu-active');
})