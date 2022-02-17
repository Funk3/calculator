const displayMe = document.querySelector(".display");
const showMe =    document.querySelector('.upperDisplay');

const numbers = {
    one:    document.querySelector('.one'),
    two:    document.querySelector('.two'),
    three:  document.querySelector('.three'),
    four:   document.querySelector('.four'),
    five:   document.querySelector('.five'),
    six:    document.querySelector('.six'),
    seven:  document.querySelector('.seven'),
    eight:  document.querySelector('.eight'),
    nine:   document.querySelector('.nine'),
    zero:   document.querySelector('.zero'),
};

const operators = {
    divide:     document.querySelector('.divide'),
    add:        document.querySelector('.add'),
    subtract:   document.querySelector('.subtract'),
    multiply:   document.querySelector('.multiply'),
  /*decimal:    document.querySelector('.decimal'),
    equal:      document.querySelector('.equal'),
    power:      document.querySelector('.power'),*/
    clear:      document.querySelector('.clear'),
}

displayMe.innerHTML= '';
// Takes the parameter of the button clicked 
// returns the element into the display
function displayThis(){
    displayMe.innerHTML=`${this.textContent}`;
    let holdMe = this;
};

numbers.one.addEventListener('click', displayThis);
numbers.two.addEventListener('click', displayThis);
numbers.three.addEventListener('click', displayThis);
numbers.four.addEventListener('click', displayThis);
numbers.five.addEventListener('click', displayThis);
numbers.six.addEventListener('click', displayThis);
numbers.seven.addEventListener('click', displayThis);
numbers.eight.addEventListener('click', displayThis);
numbers.nine.addEventListener('click', displayThis);
numbers.zero.addEventListener('click', displayThis);

operators.add.addEventListener('click', add);

operators.clear.addEventListener('click', clear => displayMe.innerHTML='0');
/*operators.power.addEventListener('click', power => {
    if(displayMe !== '') {
        displayMe.innerHTML='0';
    } else {
        displayMe.innerHTML='';
    }
}); */


function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
};

function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
};

function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber;
};

function multiply(firstNumber, SecondNumber){
    return firstNumber * SecondNumber;
};
//takes operator and 2 numbers and calls arithmetic function on numbers
function operate(firstNumber, secondNumber){
holdMe
};
