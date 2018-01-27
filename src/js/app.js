/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/src/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

window.onscroll = function() {
  const myName = document.getElementById('my-name');
  const scrollNum = window.pageYOffset;
  console.log(scrollNum);

  if (scrollNum < 84) {
    myName.style.color = '#3a3a3a';
  }

  if (scrollNum > 84) {
    myName.style.color = '#f2f2f2';
  }

  if (scrollNum > 385) {
    myName.style.color = '#3a3a3a';
  }

  if (scrollNum > 1141) {
    myName.style.color = '#f2f2f2';
  }

  if (scrollNum > 1384) {
    myName.style.color = '#3a3a3a';
  }
}
