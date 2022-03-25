
// First declarations

const numberButtons = Array.from(document.querySelectorAll('.number'));
const display = document.querySelector('.display-value');
const buttonOne = document.querySelector('.one')
const buttonTwo = document.querySelector('.two')
const buttonThree = document.querySelector('.three')
const buttonFour = document.querySelector('.four')
const buttonFive = document.querySelector('.five')
const buttonSix = document.querySelector('.six')
const buttonSeven = document.querySelector('.seven')
const buttonEight = document.querySelector('.eight')
const buttonNine = document.querySelector('.nine')
const buttonZero = document.querySelector('.zero')
const deleteButton = document.querySelector('.delete-butt')
const addOperator = document.querySelector('.add')
const subOperator = document.querySelector('.sub')
const multOperator = document.querySelector('.mult')
const divOperator = document.querySelector('.div')
const operators = Array.from(document.querySelectorAll('.operator'))

let firstOperand = '0';
let secondOperand = '0';
display.innerHTML = '0';

// Math functions

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const operate = (operator, a, b) => {
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            substract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}

// Operators functionality

addOperator.addEventListener('click', event => { operatorPress() })

const operatorPress = (operator) => {
    if (display.innerHTML != '0') {
        display.innerHTML = '0';
    }
    secondOperandBuilding()
}

// Building the first operand

const firstOperandBuilding = () => {

    const eachNumberPress = (numButton) => {
        if (display.innerHTML == '0') {
            firstOperand = numButton.innerHTML;
            display.innerHTML = numButton.innerHTML;
        }
        else if (display.innerHTML.length < 8) {
            firstOperand += numButton.innerHTML;
            display.innerHTML += numButton.innerHTML;
        }
    }

    buttonOne.addEventListener('click', event => { eachNumberPress(buttonOne) })
    buttonTwo.addEventListener('click', event => { eachNumberPress(buttonTwo) })
    buttonThree.addEventListener('click', event => { eachNumberPress(buttonThree) })
    buttonFour.addEventListener('click', event => { eachNumberPress(buttonFour) })
    buttonFive.addEventListener('click', event => { eachNumberPress(buttonFive) })
    buttonSix.addEventListener('click', event => { eachNumberPress(buttonSix) })
    buttonSeven.addEventListener('click', event => { eachNumberPress(buttonSeven) })
    buttonEight.addEventListener('click', event => { eachNumberPress(buttonEight) })
    buttonNine.addEventListener('click', event => { eachNumberPress(buttonNine) })
    buttonZero.addEventListener('click', event => { eachNumberPress(buttonZero) })
    deleteButton.addEventListener('click', event => { display.innerHTML = '0' })

}
firstOperandBuilding()

// Building the 2nd operator

const secondOperandBuilding = () => {

    const eachNumberPress = (numButton) => {

        if (firstOperand != '0' && display.innerHTML == '0') {
            secondOperand = numButton.innerHTML;
            display.innerHTML = numButton.innerHTML;
        }
        else if (firstOperand != '0' && display.innerHTML.length < 8) {
            secondOperand += numButton.innerHTML;
            display.innerHTML += numButton.innerHTML;
        }
    }

    buttonOne.addEventListener('click', event => { eachNumberPress(buttonOne) })
    buttonTwo.addEventListener('click', event => { eachNumberPress(buttonTwo) })
    buttonThree.addEventListener('click', event => { eachNumberPress(buttonThree) })
    buttonFour.addEventListener('click', event => { eachNumberPress(buttonFour) })
    buttonFive.addEventListener('click', event => { eachNumberPress(buttonFive) })
    buttonSix.addEventListener('click', event => { eachNumberPress(buttonSix) })
    buttonSeven.addEventListener('click', event => { eachNumberPress(buttonSeven) })
    buttonEight.addEventListener('click', event => { eachNumberPress(buttonEight) })
    buttonNine.addEventListener('click', event => { eachNumberPress(buttonNine) })
    buttonZero.addEventListener('click', event => { eachNumberPress(buttonZero) })
    deleteButton.addEventListener('click', event => { display.innerHTML = '0' })

}
