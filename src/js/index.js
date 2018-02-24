import $ from 'jquery';
import 'slick-carousel';
import 'particles.js/particles';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import '../scss/index.scss';

// TODO: there is an issue with babel. it wants to replace es2015 with 'env'. do something
// TODO: is the animate css lib needed?
// TODO: consider swapping css grid with this https://github.com/kristoferjoseph/flexboxgrid
// TODO: add pwa

const particlesJS = window.particlesJS;
const $howManyYears = $('#how-many-years');

$(document).ready(() => {
  animatedTyping();
  calculateHowManyYears();
  addAnimations();
  slickCarousel();
  smoothScrolling();
  initParticles();
});

function smoothScrolling() {
  $(document).on('click', 'a[href^="#"]', function smoothScroll(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top,
    }, 500);
  });
}

function initParticles() {
  particlesJS.load('particles-js', 'particles.json');
}

function addAnimations() {
  const sr = ScrollReveal();
  sr.reveal('.fade-in'); // TODO: fine tune me
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
