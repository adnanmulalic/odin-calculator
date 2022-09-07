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

let number1 = null;
let number2 = null;
let currentOperator = null;

let displayValue = document.querySelector("#display-value");
const equalsBtn = document.querySelector("#equals");
const buttons = document.querySelector("#buttons");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
let result = 0;

equalsBtn.addEventListener("click", operate(currentOperator, number1, number2), (e) => {

    e.stopPropagation;
})

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (number.id === "clear") {
            displayValue.innerHTML = 0;
            number1 = null;
            number2 = null;
            currentOperator = null;
        } else if (number1 === null || number2 === null) {
            number1 = number.innerHTML;
            displayValue.innerHTML = number1;
        }
    })
});

let currentNumber1 = number1;

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        currentOperator = operator.innerHTML;
    })
    numbers.forEach(number => {
        number.addEventListener("click", () => {
            if (number.id === "clear") {
                displayValue.innerHTML = 0;
            } else {
                number2 = number.innerHTML;
            }
        })
    })
});


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