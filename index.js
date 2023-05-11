const digits = Array.from(document.querySelectorAll('.digit'));
const display = document.querySelector('.display');
const functions = Array.from(document.querySelectorAll('.function'));

digits.forEach(digit => digit.addEventListener('click', () => {
    if (digit.textContent == 0 && display.textContent == '') return 0;
    if (digit.textContent == '.'){
        if (display.textContent == ''){
            display.textContent = '0.'
            return 0;
        } else if(display.textContent.split('').includes('.')) {
            return 0;
        }
    }
    display.textContent += digit.textContent;

}))
function operate(operator, firstNumber, secondNumber = null){
    switch(operator){
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber,secondNumber);
        case '**':
            return squared(firstNumber);
        case 'sqrt':
            return squareRoot(firstNumber);
    };
};

function add(n1, n2){
    return n1+n2;
};

function subtract(n1, n2){
    return n1-n2;
};

function multiply(n1,n2){
    return n1*n2;
};

function divide(n1, n2){
    return n1/n2;
};

function squared(n1){
    return n1**2;
};

function squareRoot(n1){
    return Math.sqrt(n1);
};