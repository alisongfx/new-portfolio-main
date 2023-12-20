const hamburguer = document.getElementById('hamburguer');
const navMenu = document.querySelector('.nav-itens');
const linkMenuAnchorAll = document.querySelectorAll('.nav-itens li a');
const linkMenuAnchor = document.querySelector('.nav-itens li a');
const nav = document.querySelector('nav');

function init() {
  startAnimation();
  carouselXp();
}

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');

  if (hamburguer.classList.contains('active')) {
    hamburguer.style = ''
  } else {
    hamburguer.style = 'background-color: #0000003d;'
  }

  if (window.scrollY < 400 && !hamburguer.classList.contains('active')) {
    hamburguer.style = ''
    hamburguer.removeAttribute("style");
  }

})

linkMenuAnchorAll.forEach((linkMenuAnchor) => linkMenuAnchor.addEventListener('click', (e) => {
  if (hamburguer.classList.contains('active') && navMenu.classList.contains('active')) {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
  }
}))

if (window.scrollY > 400 && !hamburguer.classList.contains('active')) {
  hamburguer.style = 'background-color: #0000003d;'
} else {
  hamburguer.style = ''
  hamburguer.removeAttribute("style");
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 400 && !hamburguer.classList.contains('active')) {
    hamburguer.style = 'background-color: #0000003d;'
  } else {
    hamburguer.style = ''
    hamburguer.removeAttribute("style");
  }
});

function carouselXp() {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1990,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}

function startAnimation() {
  window.sr = ScrollReveal({ reset: true });

  sr.reveal('.sobre-title', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    distance: '-30px',
  });

  sr.reveal('.profit', {
    duration: 3000,
    rotate: { x: 0, y: 0, z: 0 },
    distance: '-40px',
  });

  sr.reveal('.sobre-ph', {
    duration: 3000,
    rotate: { x: 0, y: 0, z: 0 },
    distance: '-30px',
  });

  ScrollReveal({ distance: '70px' }).reveal('.txt-portfolio', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'left'
  });

  ScrollReveal({ distance: '70px' }).reveal('.nav-itens', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'top'
  });

  ScrollReveal({ distance: '70px' }).reveal('.welcome', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'bottom'
  });

  ScrollReveal({ distance: '70px' }).reveal('.imgphoto > img', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'left'
  });

  ScrollReveal({ distance: '70px' }).reveal('.imgphotobanner > img', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'right'
  });

  ScrollReveal({ distance: '100px' }).reveal('.img-sobre', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'left'
  });

  ScrollReveal({ distance: '70px' }).reveal('.residence-contact', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'bottom'
  });

  ScrollReveal({ distance: '90px' }).reveal('.frase-negocio', {
    duration: 3000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'bottom'
  });

  ScrollReveal({ distance: '120px' }).reveal('.entre-contato', {
    duration: 4000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'bottom'
  });

  ScrollReveal({ distance: '70px' }).reveal('.behance-contact', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'top'
  });

  ScrollReveal({ distance: '80px' }).reveal('.linkedin-contact', {
    duration: 3000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'top'
  });

  ScrollReveal({ distance: '90px' }).reveal('.github-contact', {
    duration: 4000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'top'
  });

  ScrollReveal({ distance: '100px' }).reveal('.instagram-contact', {
    duration: 5000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'top'
  });

  ScrollReveal({ distance: '70px' }).reveal('.xp', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'bottom'
  });

  ScrollReveal({ distance: '80px' }).reveal('.xp-p', {
    duration: 3000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'bottom'
  });

  ScrollReveal({ distance: '70px' }).reveal('.movie', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'top'
  });

  ScrollReveal({ distance: '80px' }).reveal('.refugio', {
    duration: 3000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'top'
  });

  ScrollReveal({ distance: '90px' }).reveal('.spotify', {
    duration: 4000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'top'
  });

  ScrollReveal({ distance: '100px' }).reveal('.beasteats', {
    duration: 4000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'top'
  });

  ScrollReveal({ distance: '110px' }).reveal('.calc', {
    duration: 4000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'top'
  });

  ScrollReveal({ distance: '120px' }).reveal('.itaunext', {
    duration: 4000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'top'
  });

  ScrollReveal({ distance: '130px' }).reveal('.todolist', {
    duration: 4000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'top'
  });
}

init();