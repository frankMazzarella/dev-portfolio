import '../scss/index.scss';

// TODO: there is an issue with babel. it wants to replace es2015 with 'env'. do something

const howManyYearsEl = document.getElementById('how-many-years');
const startDate = Date.parse('Feb 1, 2016');
const now = new Date().getTime();
const oneYear = 1000 * 60 * 60 * 24 * 365;
const years = (now - startDate) / oneYear;
howManyYearsEl.textContent = years.toFixed(1);
