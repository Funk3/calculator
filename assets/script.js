const displayMe = document.querySelector(".display");

const button = document.querySelector('button');

const one = document.querySelector('.one');
const two = document.querySelector('two');
const three = document.querySelector('three');
const four = document.querySelector('four');
const five = document.querySelector('five');
const six = document.querySelector('six');
const seven = document.querySelector('seven');
const eight = document.querySelector('eight');
const nine = document.querySelector('nine');
const zero = document.querySelector('zero');
const equal = document.querySelector('equal');
const divide = document.querySelector('divide');
const add = document.querySelector('add');
const subtract = document.querySelector('subtract');
const multiply = document.querySelector('multiply');
const decimal = document.querySelector('decimal');

displayMe.innerHTML= '0';

function displayThis(e) {
    e => e.innerHTML = `${e}`;
}
one.addEventListener('click', displayMe.innerHTML='1');