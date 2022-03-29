
// First declarations

const numberButtons = document.querySelectorAll('.number');
const display = document.querySelector('.display-value');
const onOffButton = document.querySelector('.on-off-butt')
const addOperator = document.querySelector('.add')
const subOperator = document.querySelector('.sub')
const multOperator = document.querySelector('.mult')
const divOperator = document.querySelector('.div')
const operators = document.querySelectorAll('.operator')
const equalButton = document.querySelector('.equal-butt')

let firstOperand = '0';
let secondOperand = '0';
display.innerHTML = '';
let operandBuildingRanOnce = 0;
let switchBetweenOperators = 0;
let onOffSwitch = 0;

// On/Off button functionality

const onOffButtFunction = () => {

    onOffButton.addEventListener('dblclick', event => {

        if (onOffSwitch == 0) {

            display.innerHTML = '0';
            onOffSwitch = 1;
            if (operandBuildingRanOnce == 0) { OperandBuilding() }

        }

        else if (onOffSwitch == 1) {

            onOffSwitch = 0;
            display.innerHTML = ''

        }
    })
}

// This function deletes the display output and switches to building the second operand

const operatorButtonPress = () => {

    if (firstOperand != '0') {

        switchBetweenOperators = 1

        if (display.innerHTML != '0') {
            display.innerHTML = '0'
        }
    }

}
// Building operand functionality including the delete button func

const OperandBuilding = () => {

    operandBuildingRanOnce = 1;

    const eachNumberPress = (numButton) => {

        if (switchBetweenOperators == 0) {

            if (display.innerHTML == '0') {

                firstOperand = numButton.innerHTML;
                display.innerHTML = numButton.innerHTML;


            }

            else if (display.innerHTML.length < 8 && onOffSwitch == 1) {

                firstOperand += numButton.innerHTML;
                display.innerHTML = firstOperand;


            }
        }
        else if (switchBetweenOperators == 1) {

            if (display.innerHTML == '0') {

                secondOperand = numButton.innerHTML;
                display.innerHTML = numButton.innerHTML;

            }

            else if (display.innerHTML.length < 8) {

                secondOperand += numButton.innerHTML;
                display.innerHTML = secondOperand;

            }
        }
    }



    for (let i = 0; i < numberButtons.length; i++) {

        numberButtons[i].addEventListener('click', event => { eachNumberPress(numberButtons[i]) })

    }


    addOperator.addEventListener('click', event => { operatorButtonPress(); typeOfOperation = 'sum' })
    subOperator.addEventListener('click', event => { operatorButtonPress(); typeOfOperation = 'sub' })
    multOperator.addEventListener('click', event => { operatorButtonPress(); typeOfOperation = 'mult' })
    divOperator.addEventListener('click', event => { operatorButtonPress(); typeOfOperation = 'div' })

    equalButton.addEventListener('click', event => { equalButtFunc() })

    onOffButton.addEventListener('click', event => {

        if (display.innerHTML != '0' && onOffSwitch == 1) {

            display.innerHTML = '0'
            switchBetweenOperators = 0;
            firstOperand = '0';
            secondOperand = '0';

        }
    })
}

// Equal button runs the calculus and always stores the result in the first operand so you can chain calculations

const equalButtFunc = () => {

    if (firstOperand != '0' && secondOperand != '0') {

        let result;
        let a = Number(firstOperand);
        let b = Number(secondOperand);

        switch (typeOfOperation) {
            case 'sum':
                result = a + b;
                break;
            case 'sub':
                result = a - b;
                break;
            case 'mult':
                result = a * b;
                break;
            case 'div':
                result = parseInt(a / b);
                break;
        }

        display.innerHTML = result;
        firstOperand = result;

    }
}

onOffButtFunction()