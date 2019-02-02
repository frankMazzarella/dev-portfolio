import $ from 'jquery';
import 'slick-carousel';
import 'particles.js/particles';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import Leaflet from 'leaflet';
import MobileDetect from 'mobile-detect';
import '../scss/index.scss';

const particlesJS = window.particlesJS;
const $howManyYears = $('#how-many-years');
const $thisYear = $('#this-year');
const $headerFade = $('.header-fade');

$(document).ready(() => {
  animatedTyping();
  initHeaderFade();
  calculateHowManyYears();
  addAnimations();
  initSlickCarousel();
  smoothScrolling();
  initParticles();
  initMap();
  displayThisYearInFooter();
  initServiceWorker();
});

function initHeaderFade() {
  const scroll = $(window).scrollTop();
  $headerFade.css({ opacity: ((100 - scroll) / 100) + 0.1 });
  $headerFade.show();
  $(window).scroll(() => {
    const scroll = $(window).scrollTop();
    if (scroll < 150) {
      $headerFade.css({ opacity: ((100 - scroll) / 100) + 0.1 });
    }
  });
}

function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
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

function initSlickCarousel() {
  $('.carousel').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
  });
}

function initMap() {
  const mobileDetect = new MobileDetect(window.navigator.userAgent);
  const dragging = !mobileDetect.mobile();
  const map = Leaflet.map('map-element', { dragging, scrollWheelZoom: false });
  map.setView([41.4090, -75.6624], 14);
  const attribution = 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.';
  const tiles = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';
  const layer = Leaflet.tileLayer(tiles, { attribution, maxZoom: 18 });
  layer.addTo(map);
}

function displayThisYearInFooter() {
  const thisYear = new Date().getFullYear();
  $thisYear.text(thisYear);
}
