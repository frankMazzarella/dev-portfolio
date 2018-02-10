import $ from 'jquery';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import '../scss/index.scss';

// TODO: there is an issue with babel. it wants to replace es2015 with 'env'. do something
// TODO: is the animate css lib needed?

const $howManyYears = $('#how-many-years');

$(document).ready(() => {
  animatedTyping();
  calculateHowManyYears();
  addAnimations();
});

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
  const typed = new Typed('#typed-out', {
    stringsElement: '#header-typed',
    typeSpeed: 40,
    startDelay: 1000,
  });
}
