
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
const onOffButton = document.querySelector('.on-off-butt')
const addOperator = document.querySelector('.add')
const subOperator = document.querySelector('.sub')
const multOperator = document.querySelector('.mult')
const divOperator = document.querySelector('.div')
const operators = Array.from(document.querySelectorAll('.operator'))
const equalButton = document.querySelector('.equal-butt')

let firstOperand = '0';
let secondOperand = '0';
display.innerHTML = '';
let typeOfOperation = '';
let deleteSwitch = 0;


let firstOperandBuildingSwitch = 0;
let firstOperandRanOnce = 0;
let secondOperandBuildingSwitch = 0;

// A switch for the first operatorBuilding function

let onOffSwitch = 0;
let operationSwitch = 0;

// Math functions


const operate = (operator, a, b) => {
    switch (operator) {
        case "+":
            a = Number(a); b = Number(b); return a + b;
            break;
        case "-":
            a = Number(a); b = Number(b); return a - b;
            break;
        case "*":
            a = Number(a); b = Number(b); return a * b;
            break;
        case "/":
            a = Number(a); b = Number(b); return a / b;
            break;
    }
}

// Operator's function which resets the display value, disables the first Operand building and runs the second one
const onOffButtFunction = () => {

    onOffButton.addEventListener('dblclick', event => {

        if (onOffSwitch == 0 && firstOperandBuildingSwitch == 0 && firstOperandRanOnce == 0) {
            display.innerHTML = '0';
            firstOperand = '0';
            secondOperand = '0';
            onOffSwitch = 1;
            chooseOperandFunc()
        }
        else if (onOffSwitch == 0 && firstOperandBuildingSwitch == 0) {
            display.innerHTML = '0';
            firstOperand = '0';
            secondOperand = '0';
            onOffSwitch = 1;
        }
        else if (onOffSwitch == 1) {
            onOffSwitch = 0;
            display.innerHTML = ''
            firstOperand = '0';
            secondOperand = '0';
        }
    })

}

///////////////////////////////////////////////////////////////////////////////

const operatorButtonPress = () => {

    firstOperandBuildingSwitch = 1

    if (deleteSwitch == 0) { chooseOperandFunc() }

    const resetDisplayVal = () => {

        if (display.innerHTML != '0') {
            display.innerHTML = '0'
        }

    }
    resetDisplayVal()
}
// Building the first operand

const firstOperandBuilding = () => {
    firstOperandRanOnce = 1;
    const eachNumberPress = (numButton) => {

        if (display.innerHTML == '0' && firstOperandBuildingSwitch == 0) {

            firstOperand = numButton.innerHTML;
            display.innerHTML = numButton.innerHTML;


        }

        else if (display.innerHTML.length < 8 && firstOperandBuildingSwitch == 0) {

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

    addOperator.addEventListener('click', event => { operatorButtonPress(); typeOfOperation = 'sum' })
    subOperator.addEventListener('click', event => { operatorButtonPress(); typeOfOperation = 'sub' })
    multOperator.addEventListener('click', event => { operatorButtonPress(); typeOfOperation = 'mult' })
    divOperator.addEventListener('click', event => { operatorButtonPress(); typeOfOperation = 'div' })

    onOffButton.addEventListener('click', event => {

        if (display.innerHTML != '0' && firstOperandBuildingSwitch == 0 && onOffSwitch == 1) {
            display.innerHTML = '0'
            firstOperand = '0';
            secondOperand = '0';

        }
    })


}

const equalButtFunc = () => {

    if (firstOperand != '0' && secondOperand != '0') {
        switch (typeOfOperation) {
            case 'sum':
                display.innerHTML = operate('+', firstOperand, secondOperand);
                firstOperand = operate('+', firstOperand, secondOperand);
                break;
            case 'sub':
                display.innerHTML = operate('-', firstOperand, secondOperand);
                firstOperand = operate('-', firstOperand, secondOperand);
                break;
            case 'mult':
                display.innerHTML = operate('*', firstOperand, secondOperand);
                firstOperand = operate('*', firstOperand, secondOperand);
                break;
            case 'div':
                display.innerHTML = operate('/', firstOperand, secondOperand);
                firstOperand = operate('/', firstOperand, secondOperand);
                break;
        }
        operationSwitch = 1;
        chooseOperandFunc();
    }
}

// Building the 2nd operand

const secondOperandBuilding = () => {

    const eachNumberPress = (numButton) => {

        if (display.innerHTML == '0' && firstOperandBuildingSwitch == 1) {

            secondOperand = numButton.innerHTML;
            display.innerHTML = numButton.innerHTML;

        }

        else if (display.innerHTML.length < 8 && firstOperandBuildingSwitch == 1) {

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

    onOffButton.addEventListener('click', event => {

        if (display.innerHTML != '0' && onOffSwitch == 1) {
            display.innerHTML = '0'
            firstOperand = '0';
            secondOperand = '0';
            firstOperandBuildingSwitch = 0;
            deleteSwitch = 1;
        }
    })

    equalButton.addEventListener('click', event => { equalButtFunc() })

}


///////////////////////////////////////////////////////////////////////////////////


// This function checks which building function to run

const chooseOperandFunc = () => {

    if (onOffSwitch == 1 && firstOperandBuildingSwitch == 0) {
        firstOperandBuilding()
    }
    else if (onOffSwitch == 1 && firstOperandBuildingSwitch == 1 && operationSwitch == 0) { secondOperandBuilding() }
}


onOffButtFunction()