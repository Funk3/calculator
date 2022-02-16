const displayMe = document.querySelector(".display");
const button = document.querySelector('button');

const operators = {
one: document.querySelector('.one'),
two: document.querySelector('.two'),
three: document.querySelector('.three'),
four: document.querySelector('.four'),
five: document.querySelector('.five'),
six: document.querySelector('.six'),
seven: document.querySelector('.seven'),
eight: document.querySelector('.eight'),
nine: document.querySelector('.nine'),
zero: document.querySelector('.zero'),
equal: document.querySelector('.equal'),
divide: document.querySelector('.divide'),
add: document.querySelector('.add'),
subtract: document.querySelector('.subtract'),
multiply: document.querySelector('.multiply'),
decimal: document.querySelector('.decimal'),
};

displayMe.innerHTML= '0';

// Takes the parameter of the button clicked 
// returns the element into the display
function displayThis(){
    displayMe.innerHTML=`${this.textContent}`;
};


console.log(operators.Onclick = displayThis());