const displayMe = document.querySelector(".display");
const showMe =    document.querySelector('.upperDisplay');
let operatorArray = [];
let answer = [];

displayMe.innerHTML= '';

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

const numberEvent = {
    one:    numbers.one.addEventListener('click', displayThis),
    two:    numbers.two.addEventListener('click', displayThis),
    three:  numbers.three.addEventListener('click', displayThis),
    four:   numbers.four.addEventListener('click', displayThis),
    five:   numbers.five.addEventListener('click', displayThis),
    six:    numbers.six.addEventListener('click', displayThis),
    seven:  numbers.seven.addEventListener('click', displayThis),
    eight:  numbers.eight.addEventListener('click', displayThis),
    nine:   numbers.nine.addEventListener('click', displayThis),
    zero:   numbers.zero.addEventListener('click', displayThis),
};

const operators = {
    divide:     document.querySelector('.divide'),
    add:        document.querySelector('.add'),
    subtract:   document.querySelector('.subtract'),
    multiply:   document.querySelector('.multiply'),
    equal:      document.querySelector('.equal'),
    clear:      document.querySelector('.clear'),
};

const operatorFunctions = {
    add:        add => operatorArray[0] + operatorArray[1],
    subtract:   subtract => operatorArray[0] - operatorArray[1],
    divide:     divide => operatorArray[0] / operatorArray[1],
    multiply:   multiply => operatorArray[0] * operatorArray[1],
};

//operator event must hold function in a variable
const operatorEvent = {
    add:        operators.add.addEventListener('click', operator),
    subtract:   operators.subtract.addEventListener('click', operator),
    multiply:   operators.multiply.addEventListener('click', operator),
    divide:     operators.divide.addEventListener('click', operator),
    equal:      operators.equal.addEventListener('click', equals),
    clear:      operators.clear.addEventListener('click',  
                    function clear(){
                        displayMe.innerHTML='0';
                        operatorArray.length = 0;
                    }),
};

function displayThis(){
    displayMe.innerHTML=`${this.textContent}`;
    let number = parseInt(this.textContent);
    operatorArray.push(number); 
};


//equals takes operator function and runs it with the second number.
function equals() {
if (operatorEvent.add == true) {
    let number = operatorFunctions.add;
    answer.push(number);
    displayMe.InnerHTML=`${this.textContent}`;
    };
};





