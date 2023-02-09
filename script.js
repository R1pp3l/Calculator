const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
const equal = document.querySelector('#equals');
const clears = document.querySelector('#clear');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if ( button.innerText !== "=" && button.innerText !== "C") {
            display.innerText += this.innerText;
        }
    });
});

clears.addEventListener('click', function() {
    display.innerText = "";
})

equal.addEventListener('click', function() {
    const expression = display.innerText;
    display.innerText = operate(expression);
})

function operate(expression) {
    let result = 0;
    let currentValue ='';
    let currentOperator = '+';

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (!isNaN(char) || char === '.') {
            currentValue += char;
        } else {
            switch (currentOperator ) {
                case '+' :
                    result += parseFloat(currentValue);
                    break;
                case '-' :
                    result -= parseFloat(currentValue);
                    break;
                case 'X' :
                    result *= parseFloat(currentValue);
                    break;
                case '/' :
                    result /= parseFloat(currentValue);
                    break;
            }
            currentValue = '';
            currentOperator = char;
        }
    }

    switch (currentOperator) {
        case '+' :
            result += parseFloat(currentValue);
            break;
        case '-' :
            result -= parseFloat(currentValue);
            break;
        case 'X' :
            result *= parseFloat(currentValue);
            break;
        case '/' :
            result /= parseFloat(currentValue);
            break;
    }

    return result;

}