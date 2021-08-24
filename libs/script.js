$(document).ready(function() {
  $('#home').show();
  $('#skills').hide();
  $('#projects').hide();
  $('#contact').hide();
});

// TOGGLE HAMBURGER MENU AND NAV ITEMS DISPLAY
const menuBtn = $('.menu-btn');
const navLinks = $('.nav-links');
let menuOpen = false;
const navLinksToggle = () => {
  console.log(menuOpen);

  if (!menuOpen) {
    menuBtn.addClass('open');
    navLinks.addClass('show');
    menuOpen = true;
  } else {
    menuBtn.removeClass('open');
    navLinks.removeClass('show');
    menuOpen = false;
  }
};
menuBtn.on('click', navLinksToggle);

// SINGLE PAGE NAVIGATION
const homeLink = $('.home-link');
const logoLink = $('.logo-link');
const skillsLink = $('.skills-link');
const projectsLink = $('.projects-link');
const contactLink = $('.contact-link');

// SHOW FUNCTIONS FOR EACH VIEW
const showHome = () => {
  navLinksToggle();
  homeLink.addClass('link-active');
  skillsLink.removeClass('link-active');
  projectsLink.removeClass('link-active');
  contactLink.removeClass('link-active');
  $('#footer').hide();
  $('#skills').hide();
  $('#projects').hide();
  $('#contact').hide();
  $('#home').slideDown('slow');
};
const showHomeLogo = () => {
  menuOpen = true;
  navLinksToggle();
  homeLink.addClass('link-active');
  skillsLink.removeClass('link-active');
  projectsLink.removeClass('link-active');
  contactLink.removeClass('link-active');
  $('#footer').hide();
  $('#skills').hide();
  $('#projects').hide();
  $('#contact').hide();
  $('#home').slideDown('slow');
};
const showSkills = () => {
  navLinksToggle();
  homeLink.removeClass('link-active');
  skillsLink.addClass('link-active');
  projectsLink.removeClass('link-active');
  contactLink.removeClass('link-active');
  $('#footer').hide();
  $('#home').hide();
  $('#projects').hide();
  $('#contact').hide();
  $('#skills').slideDown('slow');
};
const showProjects = () => {
  navLinksToggle();
  homeLink.removeClass('link-active');
  skillsLink.removeClass('link-active');
  projectsLink.addClass('link-active');
  contactLink.removeClass('link-active');
  $('#footer').hide();
  $('#home').hide();
  $('#skills').hide();
  $('#contact').hide();
  $('#projects').slideDown('slow');
};
const showContact = () => {
  navLinksToggle();
  homeLink.removeClass('link-active');
  skillsLink.removeClass('link-active');
  projectsLink.removeClass('link-active');
  contactLink.addClass('link-active');
  $('#footer').hide();
  $('#home').hide();
  $('#skills').hide();
  $('#projects').hide();
  $('#contact').slideDown('slow');
};
const showFooter = () => {
  $('#footer').show();
};
// ON CLICK EVENT LISTENERS TO PAGE NAV
homeLink.on('click', () => {
  showHome();
  setTimeout(() => {
    showFooter();
  }, 1000);
});
logoLink.on('click', () => {
  showHomeLogo();
  setTimeout(() => {
    showFooter();
  }, 1000);
});
skillsLink.on('click', () => {
  showSkills();
  setTimeout(() => {
    showFooter();
  }, 1000);
});
projectsLink.on('click', () => {
  showProjects();
  setTimeout(() => {
    showFooter();
  }, 1000);
});
contactLink.on('click', () => {
  showContact();
  setTimeout(() => {
    showFooter();
  }, 1000);
});

// CONTACT FORM
$('#contact-form').validate();

// FOOTER
const $currentYear = new Date().getFullYear();
const $footerCopy = `<p>Samuel Symonds &copy; ${$currentYear}</p>`;
$('#footer-copy').html($footerCopy);
