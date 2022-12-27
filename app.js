function parallax(e) {
  document.querySelectorAll('.object').forEach(function (move) {
    var moving_value = move.getAttribute('data-value');
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;
    move.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
  });
}
document.addEventListener('mousemove', parallax);
console.log('hello');
const navslide = () => {
  const lines = document.querySelector('.lines');
  const nav = document.querySelector('.nav-links');
  const navlinks = document.querySelectorAll('.nav-links li');
  lines.addEventListener('click', () => {
    nav.classList.toggle('nav-active-links');
    navlinks.forEach((link, index) => {
      link.style.animation = `navlinkfade 0.5s ease forwards ${
        index / 7 + 0.2
      }s`;
    });
    lines.classList.toggle('toggle');
  });
};

navslide();

const removeActive = () => {
  const lines = document.querySelector('.lines');
  const nav = document.querySelectorAll('.nav-links');
  const navlinks = document.querySelectorAll('.nav-links li');
  // console.log(navlinks);
  navlinks.forEach((link, index) => {
    link.addEventListener('click', () => {
      // console.log(nav);
      nav[0].classList.remove('nav-active-links');
      lines.classList.remove('toggle');
    });
    // lines.classList.remove('toggle');
  });
};
removeActive();
