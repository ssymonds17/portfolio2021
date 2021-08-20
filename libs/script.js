// TOGGLE HAMBURGER MENU

const menuBtn = $('.menu-btn');
let menuOpen = false;
menuBtn.on('click', () => {
  if (!menuOpen) {
    menuBtn.addClass('open');
    menuOpen = true;
  } else {
    menuBtn.removeClass('open');
    menuOpen = false;
  }
});
