let numberOne = "";
let numberTwo = "";
let operator = null;
let degrees = true; // if this is true, then we are using degrees, otherwise we are using radians
let nextOp = false; // if this is true, then clicking another number will delete the previous answer

// Constants here
const SCREEN = document.getElementById('screen');
const MAXDIGITS = 15;

// Initializes each of the buttons with their corresponding functions. 
function setup() {
    // Special functions that directly numberOne, numberTwo and operator
    document.getElementById("equals").addEventListener("click", () => {evaluate()});
    document.getElementById("AC").addEventListener("click", () => {clear()});

    // Functions with unique functionality
    document.getElementById("deg").addEventListener("click", (e) => {degree(e)});
    document.getElementById("DEL").addEventListener("click", () => {del()});

    // Functions that only take in one argument
    document.getElementById("decimal").addEventListener("click", () => {decimal()});
    document.getElementById("percent").addEventListener("click", () => singleOperator(function(a) {return a * 0.01}));
    document.getElementById("negative").addEventListener("click", () => singleOperator(function(a) {return a * -1}));
    document.getElementById("factorial").addEventListener("click", () => singleOperator(factorial));
    document.getElementById("ln").addEventListener("click", () => singleOperator(Math.log));

    // Trig functions
    document.getElementById("sin").addEventListener("click", () => trig(Math.sin));
    document.getElementById("cos").addEventListener("click", () => trig(Math.cos));
    document.getElementById("tan").addEventListener("click", () => trig(Math.tan));

    // Functions that take in two arguments 
    document.getElementById("divide").addEventListener("click", () => {if (!numberTwo) {SCREEN.innerText = "/"; operator = divide;}});
    document.getElementById("divideround").addEventListener("click", () => {if (!numberTwo) {SCREEN.innerText = "//"; operator = divideround;}});
    document.getElementById("plus").addEventListener("click", () => {if (!numberTwo) {SCREEN.innerText = "+"; operator = add;}})
    document.getElementById("minus").addEventListener("click", () => {if (!numberTwo) {SCREEN.innerText = "-"; operator = subtract;}});
    document.getElementById("multiply").addEventListener("click", () => {if (!numberTwo) {SCREEN.innerText = "*"; operator = multiply;}});
    document.getElementById("nPr").addEventListener("click", () => {if (!numberTwo) {SCREEN.innerText = "nPr"; operator = nPr;}});
    document.getElementById("nCr").addEventListener("click", () => {if (!numberTwo) {SCREEN.innerText = "nCr"; operator = nCr;}});
    document.getElementById("power").addEventListener("click", () => {if (!numberTwo) {SCREEN.innerText = "^"; operator = power;}});
    document.getElementById("log").addEventListener("click", () => {if (!numberTwo) {SCREEN.innerText = "log"; operator = getBaseLog;}});

    // Functions that input numbers into the calculator
    document.getElementById("zero").addEventListener("click", () =>  appendToDisplay("0"));
    document.getElementById("one").addEventListener("click", () => appendToDisplay("1"));
    document.getElementById("two").addEventListener("click", () => appendToDisplay("2"));
    document.getElementById("three").addEventListener("click", () => appendToDisplay("3"));
    document.getElementById("four").addEventListener("click", () =>  appendToDisplay("4"));
    document.getElementById("five").addEventListener("click", () => appendToDisplay("5"));
    document.getElementById("six").addEventListener("click", () => appendToDisplay("6"));
    document.getElementById("seven").addEventListener("click", () => appendToDisplay("7"));
    document.getElementById("eight").addEventListener("click", () => appendToDisplay("8"));
    document.getElementById("nine").addEventListener("click", () => appendToDisplay("9"));
    document.getElementById("e").addEventListener("click", () => appendToDisplay(Math.E));
    document.getElementById("pi").addEventListener("click", () => appendToDisplay(Math.PI));

    // Initialize
    format("0");
}

// Resets the calculator to initial state
function clear() {
    numberOne = "";
    numberTwo = "";
    operator = null;
    format("0");
}

// Adds a value to either numberOne or numberTwo
function appendToDisplay(value) {
    if ((numberOne == "0" && value == "0") || (numberTwo == "0" && value == "0")) {
        return;
    }
    
    if (! operator) {
        if (nextOp || numberOne == "0") {
            numberOne = value;
            nextOp = false;
        } else {
            numberOne += value; 
        }
        format(numberOne);
    } else {
        if (numberTwo == "0") {
            numberTwo = value;
        } else {
            numberTwo += value;
        }
        format(numberTwo);
    }
}

// Performs a trig function and displays it
function trig(trigfunction) {
    if (! numberOne && ! numberTwo) {
        SCREEN.innerText = "ERROR";
    }

    result = 1;

    if (degrees) {
        result = result * (Math.PI) / 180;
    }

    if (! numberTwo) {
        result =  trigfunction(result * parseFloat(numberOne));
        numberOne = result.toString();
    } else {
        result = trigfunction(result * parseFloat(numberTwo));
        numberTwo = result.toString();
    }

    format(result.toString());
}

// Performs a singleOperator function and displays it
function singleOperator(op) {
    if (! numberOne && ! numberTwo) {
        SCREEN.innerText = "ERROR";
    }

    result = ""
    if (! numberTwo) {
        result =  op(parseFloat(numberOne));
        numberOne = result.toString();
    } else {
        result = op(parseFloat(numberTwo));
        numberTwo = result.toString();
    }

    format(result.toString());
}

// Evaluates numberOne (operation) numberTwo
function evaluate() {
    if (! numberOne || ! numberTwo || ! operator) {
        SCREEN.innerText = "ERROR";
    } else {
        result = operator(parseFloat(numberOne), parseFloat(numberTwo)).toString();
        numberOne = result;
        numberTwo = ""
        operator = null;
        format(result);
        nextOp = true;
    }
}

// Formats display so that only MAXDIGITS are displayed at a time 
function format(text) {
    if (text.length > MAXDIGITS) {
        if (text.includes('.')) {
            text = text.slice(text.length - MAXDIGITS);
        } else {
            text = text.slice(0, - (text.length - MAXDIGITS));
        }
    }
    

    SCREEN.innerText = text;
}

// Switches calculator from degrees to radians mode and vice versa
function degree(e) {
    if (degrees == true) {
        degrees = false;
        e.target.innerText = "rad";
        e.target.style.backgroundColor = "red";
    } else {
        degrees = true;
        e.target.innerText = "deg";
        e.target.style.backgroundColor = "pink";
    }
    
}

// Deletes the last character of either numberOne or numberTwo
function del() {
    if ((numberOne == "") || (numberOne == "0")) {
        return;
    }
    
    if (! operator) {
        if (numberOne.length == 1) {
            numberOne = "0";
        } else {
            numberOne = numberOne.slice(0, - 1);
        }
        format(numberOne);
    } else {
        if (numberTwo == "" || numberTwo == "0") {
            return;
        }

        if (numberTwo.length == 1) {
            numberTwo = "0";
        } else {
            numberTwo = numberTwo.slice(0, - 1);
        }
        format(numberTwo);
    }
}

// multiplies a number by 0.01
function decimal() {   
    if (! numberOne && ! numberTwo) {
        SCREEN.innerText = "ERROR";
    }

    result = ""
    if (! numberTwo) {
        numberOne += ".";
        result =  numberOne + "0";
    } else {
        numberTwo += ".";
        result =  numberTwo + "0";
    }

    format(result.toString());
}

// Adds two numbers
function add(a, b) {
    return a + b;
}

// Subtracts two numbers
function subtract(a, b) {
    return a - b;
}

// Multiplies two numbers
function multiply(a, b) {
    return a * b;
}

// Divides two numbers
function divide(a, b) {
    if (b == 0) {
        return "lol";
    } else {
        return a / b;
    }  
}

// Divides two numbers and rounds the result
function divideround(a, b) {
    if (b == 0) {
        return "lol";
    } else {
        return Math.round(a / b);
    }  
}

// Performs the factorial function on the number
function factorial(number) {
    if (typeof(number) != "number") {
        number = parseInt(number);
    }

    if (number < 1) {
        return 1;
    }

    return number * factorial (number - 1);
}

// Computes the number of permutations of two numbers
function nPr(a, b) {
    if (b > a) {
        return "nice try";
    }

    return factorial(a) / (factorial(b - a));
} 

// Computes the number of combinations of two numbers
function nCr(a, b) {
    if (b > a) {
        return "nice try";
    }

    return factorial(a) / (factorial(b) * factorial(b - a));
} 

// Computes log_b(a)
function getBaseLog(a, b) {
    if (b == 0) {
        return "b is 0 lol";
    }

    return Math.log(a) / Math.log(b);
}

// Computes a raised to b's power
function power(a, b) {
    return Math.pow(a, b);
}

// Calculator starts here 
setup();