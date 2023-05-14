const digits = Array.from(document.querySelectorAll('.digit'));
const display = document.querySelector('.display');
const firstNumber = [];
const operation = [];
const secondNumber = [];

digits.forEach(digit => digit.addEventListener('click', ()=>{
    if (operation.length > 0){
        if (digit.textContent == 0 && display.textContent == '') return 0;
        if (digit.textContent == '.'){
            if (secondNumber.length == 0){
                secondNumber.push('0','.');
                display.textContent += '0.';
                return 0;
            } else if(secondNumber.includes('.')) {
                return 0;
            };
        };
        secondNumber.push(digit.textContent);
        display.textContent += digit.textContent;
    } else {
        if (digit.textContent == 0 && display.textContent == '') return 0;
        if (digit.textContent == '.'){
            if (display.textContent == ''){
                firstNumber.push('0','.')
                display.textContent = '0.';
                return 0;
            } else if(firstNumber.includes('.')) {
                return 0;
            };
        };
        firstNumber.push(digit.textContent);
        display.textContent += digit.textContent;
    };
}));

const functions = Array.from(document.querySelectorAll('.function'));

functions.forEach(func => func.addEventListener('click',()=>{
    switch(func.id){
        case 'clr':
            operation.pop();
            firstNumber.splice(0, firstNumber.length);
            secondNumber.splice(0, secondNumber.length);
            display.textContent = '';
            break;
        case 'back':
            if (operation.length == 0) firstNumber.pop();
            else if (operation.length > 0 && secondNumber.length ==0) operation.pop();
            else if (operation.length > 0 && secondNumber.length > 0) secondNumber.pop();
            display.textContent = display.textContent.slice(0,-1);
            break;
        case '=':
            const result = operate(operation[0], firstNumber, secondNumber);
            display.textContent = result.toFixed(4);
            firstNumber.splice(0, firstNumber.length);
            operation.pop();
            secondNumber.splice(0, secondNumber.length);
            firstNumber.push(result);
            break;
    };
    if (operation.includes('+')||operation.includes('-')||operation.includes('*')||operation.includes('/')){
        return 0;
    };
    switch(func.id){
        case '+':
            operation.push(func.id);
            display.textContent += func.id;
            break;
        case '-':
            operation.push(func.id);
            display.textContent += func.id;
            break;
        case '*':
            operation.push(func.id);
            display.textContent += func.id;
            break;
        case '/':
            operation.push(func.id);
            display.textContent += func.id;
            break;
        case '**':
            const squared = operate(func.id, firstNumber)
            display.textContent = squared.toFixed(4);
            firstNumber.splice(0, firstNumber.length);
            operation.pop();
            secondNumber.splice(0, secondNumber.length);
            firstNumber.push(squared);
            break;
        case 'sqrt':
            const sqrt = operate(func.id, firstNumber)
            display.textContent = sqrt.toFixed(4);
            firstNumber.splice(0, firstNumber.length);
            operation.pop();
            secondNumber.splice(0, secondNumber.length);
            firstNumber.push(sqrt);
            break;
    };
}));
function operate(operator, firstNumber, secondNumber = null){
    firstNumber = +(firstNumber).reduce((acc, value) => {
        acc += value;
        return acc;
    });
    if (secondNumber != null) {
        secondNumber = +(secondNumber).reduce((acc, value) => {
            acc += value;
            return acc;
        });
    };

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