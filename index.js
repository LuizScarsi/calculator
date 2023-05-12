const digits = Array.from(document.querySelectorAll('.digit'));
const display = document.querySelector('.display');
const operation = [];

digits.forEach(digit => digit.addEventListener('click', ()=>{
    if (digit.textContent == 0 && display.textContent == '') return 0;
    if (digit.textContent == '.'){
        if (display.textContent == ''){
            operation.push('0','.')
            display.textContent = '0.';
            return 0;
        } else if(operation.includes('.')) {
            return 0;
        }
    }
    operation.push(digit.textContent);
    display.textContent += digit.textContent;
    console.log(operation)
}));

const functions = Array.from(document.querySelectorAll('.function'));

functions.forEach(func => func.addEventListener('click',()=>{
    switch(func.id){
        case 'clr':
            operation.splice(0, operation.length)
            display.textContent = '';
            break;
        case 'back':
            operation.pop();
            display.textContent = display.textContent.slice(0,-1);
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
    };
}));
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