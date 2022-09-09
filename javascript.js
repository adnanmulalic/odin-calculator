function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    }
    else if (operator === "-") {
        return subtract(num1, num2);
    }
    else if (operator === "*") {
        return multiply(num1, num2);
    }
    else if (operator === "/") {
        return divide(num1, num2);
    }
};

let number1 = "";
let number2 = "";
let currentNumber = "";
let currentOperator = null;

let displayValue = document.querySelector("#display-value");
const equalsBtn = document.querySelector("#equals");
const buttons = document.querySelectorAll("#buttons");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators"); //(".operators:not(#equals)")
let result = 0;


operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (operator.id === "equals") {
            number2 = currentNumber;
            currentNumber = displayValue.innerHTML = operate(currentOperator, parseInt(number1), parseInt(number2));
        } else {
        currentOperator = operator.innerHTML;
        number1 = currentNumber;
        currentNumber = "";
        }
    })
})

/* equalsBtn.addEventListener("click", () => {
    number2 = currentNumber;
    currentNumber = displayValue.innerHTML = operate(currentOperator, parseInt(number1), parseInt(number2)); */


//})

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (number.id === "clear") {
            displayValue.innerHTML = 0;
            currentNumber = "";
            number1 = "";
            number2 = "";
            currentOperator = null;
        }
        else if (number1 != "") {
            currentNumber += number.innerHTML
            displayValue.innerHTML = currentNumber;
        }
        else {
        currentNumber += number.innerHTML; 
        displayValue.innerHTML = currentNumber;
        }
    })
});

/* else if (currentOperator != null) {
    number2 = currentNumber;
    currentNumber = displayValue.innerHTML = operate(currentOperator, parseInt(number1), parseInt(number2));
    currentOperator = operator.innerHTML;
    number1 = currentNumber;
    number2 = ""; */