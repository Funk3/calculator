const displayMe = document.querySelector(".display");
const showMe =    document.querySelector('.upperDisplay');
let mathFunction = '';
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

// appends number to add to array
//you click on number and it displays
//you click another number and it adds to display
// is pushed to array when operator is clicked
function displayThis(){
        if (displayMe.innerHTML == '') {
            displayMe.innerHTML=`${+this.textContent}`;
        } else if (displayMe.innerHTML !== '') {
            displayMe.innerHTML += +this.textContent;
        } 
};

function add(){
    if (mathFunction == ''){
    mathFunction = 'add';
    let number = parseInt(+displayMe.textContent);
    operatorArray.push(+displayMe.textContent);
    displayMe.innerHTML = '';
    } else if (mathFunction !== ''){
        equals();
    }
};

function subtract(){
    if (mathFunction == ''){
    mathFunction = 'subtract';
    let number = parseInt(+displayMe.textContent);
    operatorArray.push(+displayMe.textContent);
    displayMe.innerHTML = '';
    } else if (mathFunction !== ''){
        equals();
    }
};

function multiply(){
    if (mathFunction == ''){
    mathFunction = 'multiply';
    let number = parseInt(+displayMe.textContent);
    operatorArray.push(+displayMe.textContent);
    displayMe.innerHTML = '';
    } else if (mathFunction !== ''){
        equals();
    }
};

function divide(){
    if (mathFunction == ''){
    mathFunction = 'divide';
    let number = parseInt(+displayMe.textContent);
    operatorArray.push(+displayMe.textContent);
    displayMe.innerHTML = '';
    } else if (mathFunction !== ''){
        equals();
    }
};

const operatorEvent = {
    add:        operators.add.addEventListener('click', add),
    subtract:   operators.subtract.addEventListener('click', subtract),
    multiply:   operators.multiply.addEventListener('click', multiply),
    divide:     operators.divide.addEventListener('click', divide),
    equal:      operators.equal.addEventListener('click', equals),
    clear:      operators.clear.addEventListener('click',  
                    function clear(){
                        displayMe.innerHTML='';
                        operatorArray.length = 0;
                        answer.length = 0;
                        mathFunction = '';
                    }),
};

function equals() {
    let number = parseInt(+displayMe.textContent);
    
    if (mathFunction == 'add') {
        if (answer.length !== 0) {
            operatorArray.splice(0,2);
            operatorArray.push(answer[0]);
            answer = [];
            displayMe.innerHTML = '';
        } else {
    operatorArray.push(+displayMe.textContent);
    answer.push(operatorFunctions.add(operatorArray[0], operatorArray[1]));
    displayMe.innerHTML=`${answer[0]}`
    }
}

    else if (mathFunction == 'subtract') {
        if (answer.length !== 0) {
            operatorArray.splice(0,2);
            operatorArray.push(answer[0]);
            answer = [];
            displayMe.innerHTML = '';
        } else {
    operatorArray.push(+displayMe.textContent);
    answer.push(operatorFunctions.subtract(operatorArray[0], operatorArray[1]));
    displayMe.innerHTML=`${answer[0]}`;
    }
}

    else if (mathFunction == 'multiply') {
        if (answer.length !== 0) {
            operatorArray.splice(0,2);
            operatorArray.push(answer[0]);
            answer = [];
            displayMe.innerHTML = '';
        } else {
    operatorArray.push(+displayMe.textContent);
    answer.push(operatorFunctions.multiply(operatorArray[0], operatorArray[1]));
    displayMe.innerHTML=`${answer[0]}`;
    } 
}

    else if (mathFunction == 'divide') {
        if (answer.length !== 0) {
            operatorArray.splice(0,2);
            operatorArray.push(answer[0]);
            answer = [];
            displayMe.innerHTML = '';
        } else {
    operatorArray.push(+displayMe.textContent);
    answer.push(operatorFunctions.divide(operatorArray[0], operatorArray[1]));
    displayMe.innerHTML=`${answer[0]}`;
    }
}

};




