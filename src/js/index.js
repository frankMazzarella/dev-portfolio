import $ from 'jquery';
import ScrollReveal from 'scrollreveal';
import '../scss/index.scss';

// TODO: there is an issue with babel. it wants to replace es2015 with 'env'. do something
// TODO: use this https://mattboldt.com/demos/typed-js/

$(document).ready(() => {
  calculateHowManyYears();
  addAnimations();
});

function addAnimations() {
  const sr = ScrollReveal();
  sr.reveal('.fade-in');
}

function calculateHowManyYears() {
  const howManyYearsEl = document.getElementById('how-many-years');
  const startDate = Date.parse('Feb 1, 2016');
  const now = new Date().getTime();
  const oneYear = 1000 * 60 * 60 * 24 * 365;
  const years = (now - startDate) / oneYear;
  howManyYearsEl.textContent = years.toFixed(1);
}

