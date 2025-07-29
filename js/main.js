window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar-container');
  const navbarOptions = document.querySelector('.navbar-options');


  if (window.scrollY > 50 && !navbarOptions.classList.contains('open')) { 
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbarOptions = document.querySelector('.navbar-options');

hamburgerMenu.addEventListener('click', function() {
  navbarOptions.classList.toggle('open');
 
  const navbar = document.querySelector('.navbar-container');
  if (navbarOptions.classList.contains('open')) {
    navbar.classList.remove('navbar-scrolled');
  }else {
    navbar.classList.add('navbar-scrolled');
  }
});

const currentUrl = window.location.href;

const navbarLinks = document.querySelectorAll('.navbar-options li a');

navbarLinks.forEach(link => {

    if (link.href === currentUrl) {
        link.classList.add('active');
    }
})

