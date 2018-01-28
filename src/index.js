'use strict';
import './style.scss';

// randomly using ES7 object rest spread because it currently raises
// an error in all browsers, but can be transpiled by Babel
const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
const n = { x, y, ...z };
if (Object.keys(n).map((key) => n[key]).reduce((p,v) => p + v) === 10) {
  document.querySelector('#app').insertAdjacentHTML('afterbegin', '<h1>works.</h1>');
}

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((el) => {
  return el * 2;
});
console.log(newArr);


// TODO: there is an issue with babel. it wants to replace es2015 with 'env'. do something
