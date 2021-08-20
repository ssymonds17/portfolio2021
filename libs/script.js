$(document).ready(function() {
  $('#home').show();
  $('#skills').hide();
  $('#project').hide();
  $('#contact').hide();
});

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

// SINGLE PAGE NAVIGATION
const homeLink = $('.home-link');
const skillsLink = $('.skills-link');
const projectsLink = $('.projects-link');
const contactLink = $('.contact-link');

homeLink.on('click', () => {
  homeLink.addClass('link-active');
  skillsLink.removeClass('link-active');
  projectsLink.removeClass('link-active');
  contactLink.removeClass('link-active');
  $('#home').show();
  $('#skills').hide();
  $('#projects').hide();
  $('#contact').hide();
});
skillsLink.on('click', () => {
  homeLink.removeClass('link-active');
  skillsLink.addClass('link-active');
  projectsLink.removeClass('link-active');
  contactLink.removeClass('link-active');
  $('#home').hide();
  $('#skills').show();
  $('#projects').hide();
  $('#contact').hide();
});
projectsLink.on('click', () => {
  homeLink.removeClass('link-active');
  skillsLink.removeClass('link-active');
  projectsLink.addClass('link-active');
  contactLink.removeClass('link-active');
  $('#home').hide();
  $('#skills').hide();
  $('#projects').show();
  $('#contact').hide();
});
contactLink.on('click', () => {
  homeLink.removeClass('link-active');
  skillsLink.removeClass('link-active');
  projectsLink.removeClass('link-active');
  contactLink.addClass('link-active');
  $('#home').hide();
  $('#skills').hide();
  $('#projects').hide();
  $('#contact').show();
});
