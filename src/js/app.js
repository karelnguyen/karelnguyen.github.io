/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/src/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

//check if element has class
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

// hamburger click
function hambClick() {
  let hambBtn = document.getElementById('hamb-btn');
  let menu = document.getElementById('menu');
  let bodyScroll = document.querySelector('body');
  hambBtn.classList.toggle("is-active");

  if (hasClass(hambBtn, 'is-active') === true) {
    menu.style.display = 'flex';
    bodyScroll.style.overflow = 'hidden';
  } else {
    menu.style.display = 'none';
    bodyScroll.style.overflow = 'auto';
  }
};

function closeMenu() {
  let hambBtn = document.getElementById('hamb-btn');
  let menu = document.getElementById('menu');
  menu.style.display = 'none';
  hambBtn.classList.toggle("is-active");
  let bodyScroll = document.querySelector('body');
  bodyScroll.style.overflow = 'auto';

}

window.onscroll = function() {
  const navbar = document.getElementById('navbar-bc');
  const scrollNum = window.pageYOffset;

  if (scrollNum < 30) {
   navbar.style.background = 'transparent';
  }

  if (scrollNum > 30) {
    navbar.style.backgroundColor = '#f2f2f2';
  }
};

//TypeIt library for text type animation
new TypeIt('#hello', {
     strings: ['hello','hallo','ahoj','salut','hola','你好','ciao','привет'],
     speed: 250,
     breakLines: false,
     autoStart: false,
     cursor: true,
     loop: true
});

//scrollreveal
window.sr = ScrollReveal({ reset: true });
sr.reveal('.c-text1-2');
sr.reveal('.c-text2-wrapper');
sr.reveal('.about-title');
sr.reveal('.about-p');
sr.reveal('.s-title');
sr.reveal('.row');
sr.reveal('.footer-content');
