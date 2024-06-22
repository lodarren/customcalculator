let numberOne = "";
let numberTwo = "";
let operator = null;
const screen = document.getElementById('screen');
let degrees = true; // if this is true, then we are using degrees, otherwise we are using radians
let nextOp = false; // if this is true, then clicking another number will delete the previous answer

function setup() {

    document.getElementById("equals").addEventListener("click", () => {evaluate()});
    document.getElementById("AC").addEventListener("click", () => {clear()});

    document.getElementById("deg").addEventListener("click", (e) => {degree(e)});
    document.getElementById("DEL").addEventListener("click", () => {del()});
    document.getElementById("decimal").addEventListener("click", () => {decimal()});
    
    document.getElementById("percent").addEventListener("click", () => singleOperator(function(a) {return a * 0.01}))
    document.getElementById("negative").addEventListener("click", () => singleOperator(function(a) {return a * -1}))
    document.getElementById("factorial").addEventListener("click", () => singleOperator(factorial))
    document.getElementById("ln").addEventListener("click", () => singleOperator(Math.log))

    document.getElementById("sin").addEventListener("click", () => trig(Math.sin))
    document.getElementById("cos").addEventListener("click", () => trig(Math.cos))
    document.getElementById("tan").addEventListener("click", () => trig(Math.tan))

    document.getElementById("divide").addEventListener("click", () => {if (!numberTwo) {screen.innerText = "/"; operator = divide;}});
    document.getElementById("divideround").addEventListener("click", () => {if (!numberTwo) {screen.innerText = "//"; operator = divideround;}});
    document.getElementById("plus").addEventListener("click", () => {if (!numberTwo) {screen.innerText = "+"; operator = add;}})
    document.getElementById("minus").addEventListener("click", () => {if (!numberTwo) {screen.innerText = "-"; operator = subtract;}});
    document.getElementById("multiply").addEventListener("click", () => {if (!numberTwo) {screen.innerText = "*"; operator = multiply;}});
    document.getElementById("nPr").addEventListener("click", () => {if (!numberTwo) {screen.innerText = "nPr"; operator = nPr;}})
    document.getElementById("nCr").addEventListener("click", () => {if (!numberTwo) {screen.innerText = "nCr"; operator = nCr;}})
    document.getElementById("power").addEventListener("click", () => {if (!numberTwo) {screen.innerText = "^"; operator = power;}})
    document.getElementById("log").addEventListener("click", () => {if (!numberTwo) {screen.innerText = "log"; operator = getBaseLog;}})

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
    document.getElementById("e").addEventListener("click", () => appendToDisplay(Math.E))
    document.getElementById("pi").addEventListener("click", () => appendToDisplay(Math.PI))


    screen.innerText = "0";
}

function clear(e) {
    numberOne = "";
    numberTwo = "";
    operator = null;
    screen.innerText = "0";
}

function appendToDisplay(value) {
    // dont allow multiple zeros
    if (! operator) {
        if (nextOp) {
            numberOne = value;
            screen.innerText = numberOne;
            nextOp = false;
        } else {
            numberOne += value;
            screen.innerText = numberOne;
        }
    } else {
        numberTwo += value;
        screen.innerText = numberTwo;
    }
}

function trig(trigfunction) {
    if (! numberOne && ! numberTwo) {
        screen.innerText = "ERROR";
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

    screen.innerText = result.toString();
}

function singleOperator(op) {
    if (! numberOne && ! numberTwo) {
        screen.innerText = "ERROR";
    }

    result = ""
    if (! numberTwo) {
        result =  op(parseFloat(numberOne));
        numberOne = result.toString();
    } else {
        result = op(parseFloat(numberTwo));
        numberTwo = result.toString();
    }

    screen.innerText = result.toString();
}

function evaluate() {
    if (! numberOne || ! numberTwo || ! operator) {
        screen.innerText = "ERROR";
    } else {
        result = operator(parseFloat(numberOne), parseFloat(numberTwo)).toString();
        numberOne = result;
        numberTwo = ""
        operator = null;
        screen.innerText = result;
        //TODO: have a rounder
        nextOp = true;
    }
}

function del() {
    //todo
}

function decimal() {
    //todo
}

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
    if (b == 0) {
        return "lol";
    } else {
        return a / b;
    }  
}

function divideround(a, b) {
    if (b == 0) {
        return "lol";
    } else {
        return Math.round(a / b);
    }  
}

function factorial(number) {
    if (typeof(number) != "number") {
        number = parseInt(number);
    }

    if (number < 1) {
        return 1;
    }

    return number * factorial (number - 1);
}

function nPr(a, b) {
    if (b > a) {
        return "nice try";
    }

    return factorial(a) / (factorial(b - a));
} 

function nCr(a, b) {
    if (b > a) {
        return "nice try";
    }

    return factorial(a) / (factorial(b) * factorial(b - a));
} 

function getBaseLog(a, b) {
    if (b == 0) {
        return "b is 0 lol";
    }

    return Math.log(a) / Math.log(b);
}

function power(a, b) {
    return Math.pow(a, b);
}

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

setup();