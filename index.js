let firstNumber, operator, secondNumber;

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
