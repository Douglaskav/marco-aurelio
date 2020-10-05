const target = document.querySelectorAll('[data-anime]');

console.log(target);

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
  target.forEach(element => {
    if ((windowTop) > element.offsetTop) {
      element.classList.add('active');
    }
  })
}

window.addEventListener('scroll', animeScroll);
