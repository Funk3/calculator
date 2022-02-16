const displayMe = document.querySelector(".display");

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
power: document.querySelector('.power'),
clear: document.querySelector('.clear'),
};

displayMe.innerHTML= '';

// Takes the parameter of the button clicked 
// returns the element into the display
function displayThis(){
    displayMe.innerHTML=`${this.textContent}`;
};

operators.one.addEventListener('click', displayThis);
operators.two.addEventListener('click', displayThis);
operators.three.addEventListener('click', displayThis);
operators.four.addEventListener('click', displayThis);
operators.five.addEventListener('click', displayThis);
operators.six.addEventListener('click', displayThis);
operators.seven.addEventListener('click', displayThis);
operators.eight.addEventListener('click', displayThis);
operators.nine.addEventListener('click', displayThis);
operators.zero.addEventListener('click', displayThis);

operators.clear.addEventListener('click', clear => displayMe.innerHTML='0');

//fix so turns display off on second click
operators.power.addEventListener('click', power => {
    if(displayMe !== '') {
        displayMe.innerHTML='0';
    } else {
        displayMe.innerHTML='';
    }
});
