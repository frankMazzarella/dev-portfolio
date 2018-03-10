import $ from 'jquery';
import 'slick-carousel';
import 'particles.js/particles';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import '../scss/index.scss';

// TODO: there is an issue with babel. it wants to replace es2015 with 'env'. do something
// TODO: is the animate css lib needed?
// TODO: consider swapping css grid with this https://github.com/kristoferjoseph/flexboxgrid
// TODO: add manifest json
// TODO: add schema
// TODO: lighthouse testing
// TODO: replace google map with open map box because network rape and tracking
// TODO: make decision about firebase tools in dev dependency

const particlesJS = window.particlesJS;
const $howManyYears = $('#how-many-years');
const $headerFade = $('.header-fade');

$(document).ready(() => {
  animatedTyping();
  initHeaderFade();
  calculateHowManyYears();
  addAnimations();
  slickCarousel();
  smoothScrolling();
  initParticles();
  initServiceWorker();
});

function initHeaderFade() {
  const scroll = $(window).scrollTop();
  $headerFade.css({ opacity: ((100 - scroll) / 100) + 0.1 });
  $headerFade.show();
  $(window).scroll(() => {
    const scroll = $(window).scrollTop();
    $headerFade.css({ opacity: ((100 - scroll) / 100) + 0.1 });
  });
}

function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('SW registered: ', registration);
      }).catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
}

function smoothScrolling() {
  $(document).on('click', 'a[href^="#"]', function smoothScroll(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top,
    }, 1250);
  });
}

function initParticles() {
  particlesJS.load('particles-js', 'particles.json');
}

function addAnimations() {
  // available options: https://github.com/jlmakes/scrollreveal
  const options = { viewFactor: 0.4 };
  const fadeIn = ScrollReveal(options);
  fadeIn.reveal('.fade-in');
}

function calculateHowManyYears() {
  const startDate = Date.parse('Feb 1, 2016');
  const now = new Date().getTime();
  const oneYear = 1000 * 60 * 60 * 24 * 365;
  const years = (now - startDate) / oneYear;
  $howManyYears.text(years.toFixed(1));
}

function animatedTyping() {
  // eslint-disable-next-line no-new
  new Typed('#typed-out', {
    stringsElement: '#header-typed',
    typeSpeed: 40,
    startDelay: 1000,
  });
}

function slickCarousel() {
  $('.carousel').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
  });
}
