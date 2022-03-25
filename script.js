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

display.innerHTML = '0';

const eachNumberPress = (button) => {
    if (display.innerHTML == '0') { display.innerHTML = button.innerHTML }
    else if (display.innerHTML.length < 8) { display.innerHTML += button.innerHTML }

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
