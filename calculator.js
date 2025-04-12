const historyLog = [];

//no need
// let a;
// let b;

// Define a function for addition
function add(a, b) {
    return a + b;
}

// Define a function for subtraction
function subtract(a, b) {
    return a - b;
}

// Define a function for multiplication
function multiply(a, b) {
    return a * b;
}

// Define a function for division
function divide(a, b) {
    if (b===0) {
        console.log("Error: Division by zero is undefined.")
        return null;
    } else {
        return a / b;
    }
}

// Function to perform the chosen operation and log the result
function operations(num1, num2, operator) {
    if (operator === "+") {
        result = add(num1, num2);
        addToHistory(num1, num2, "+", result);
        return result;
    } else if (operator === "-") {
        result = subtract(num1, num2);
        addToHistory(num1, num2, "-", result);
        return result;
    } else if (operator === "*") {
        result = multiply(num1, num2)
        addToHistory(num1, num2, "*", result);
        return result;
    } else if (operator === "/") {
        result = divide(num1, num2);
        addToHistory(num1, num2, "/", result);
        return result;
    }
}

// Function to add to the history log
function addToHistory(num1, num2, operator, x){
    historyLog.push({
        operation: operator,
        operands: [num1, num2],
        result: x
    });
}

// Function to display calculation history
function displayHistory() {
    if (historyLog.length === 0) {
        console.log("No calculations in history.");
    } else {
        console.log("Calculation History:");
        for (let i=0; i<historyLog.length; i++) {
            const item = historyLog[i];
            const num1 = item.operands[0];
            const num2 = item.operands[1];
            const operator = item.operation;
            const result = item.result;
            console.log(`${i + 1}: ${num1} ${operator} ${num2} = ${result}`);
        }
    }
}



// Run sample operations to test
operations(10, 5, '+');
operations(20, 4, '*');
operations(10, 5, '-');
operations(22, 5, '/');
// Show the full calculation history
displayHistory();