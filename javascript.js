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
const operators = document.querySelectorAll(".operators:not(#equals)");

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (number1 != "" && currentNumber != "") {
            number2 = currentNumber;
            currentNumber = operate(currentOperator, parseFloat(number1), parseFloat(number2)).toFixed(2);
            if (currentNumber.slice(currentNumber.length - 2, currentNumber.length) === "00") {
                displayValue.innerHTML = parseInt(currentNumber);
            } else {
                displayValue.innerHTML = currentNumber;
            }
            number1 = displayValue.innerHTML;
            currentOperator = operator.innerHTML;
            currentNumber = "";
        } else if (number1 != "" && currentNumber === "") {
            currentOperator = operator.innerHTML;
            currentNumber = number1;
            number2 = "";
        }
         else {
            currentOperator = operator.innerHTML;
            number1 = currentNumber;
            currentNumber = "";
        }
    })
})

 equalsBtn.addEventListener("click", () => {
    number2 = currentNumber;
    currentNumber = operate(currentOperator, parseFloat(number1), parseFloat(number2)).toFixed(2);
    if (currentNumber.slice(currentNumber.length - 2, currentNumber.length) === "00") {
        displayValue.innerHTML = parseInt(currentNumber);
    } else {
        displayValue.innerHTML = currentNumber;
    }
    number1 = "";
    
})

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (number.id === "delete") {
            displayValue.innerHTML = displayValue.innerHTML.slice(0, displayValue.innerHTML.length - 1);
            currentNumber = displayValue.innerHTML;
        }
        else if (number.id === "clear") {
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
        else if (number2 === "" && currentOperator != null) {
            number1 = currentNumber;
            currentNumber = number.innerHTML;
            displayValue.innerHTML = currentNumber;
        }
        else {
        currentNumber += number.innerHTML; 
        displayValue.innerHTML = currentNumber;
        }
    })
});