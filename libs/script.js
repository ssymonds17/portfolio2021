// TOGGLE HAMBURGER MENU AND NAV ITEMS DISPLAY
const menuBtn = $('.menu-btn');
const navLinks = $('.nav-links');
let menuOpen = false;
menuBtn.on('click', () => {
  if (!menuOpen) {
    menuBtn.addClass('open');
    navLinks.addClass('show');
    menuOpen = true;
  } else {
    menuBtn.removeClass('open');
    navLinks.removeClass('show');
    menuOpen = false;
  }
});
