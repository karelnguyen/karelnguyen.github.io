/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/src/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

function hambClick() {
  const hambBtn = document.getElementById('hamb-btn');
  hambBtn.classList.toggle("is-active");
};

window.onscroll = function() {
  const navbar = document.getElementById('navbar');
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
     strings: ['hello','hallo','你好','ahoj','salut','hola','ciao','привет','もしもし'],
     speed: 150,
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
