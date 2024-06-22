let numberOne = "";
let numberTwo = "";
let operator = null;
let screen = document.getElementById('screen');

function evaluate() {
    if (! numberOne || ! numberTwo || ! operator) {
        screen.innerText = "ERROR";
    } else {
        screen.innerText = operator(parseFloat(numberOne), parseFloat(numberTwo));
    }
}

function add() {
    return numberOne + numberTwo;
}

function subtract() {
    return numberOne - numberTwo;
}

function multiply() {
    return numberOne * numberTwo;
}

function divide() {
    if (numberTwo == 0) {
        return "lol";
    } else {
        return numberOne / numberTwo;
    }  
}

function divideround() {
    if (numberTwo == 0) {
        return "lol";
    } else {
        return math.round(numberOne / numberTwo);
    }  
}

function clear(e) {
    numberOne = "";
    numberTwo = "";
    operator = null;
    screen.innerText = "0";
}

function appendToDisplay(value) {
    if (! operator) {
        numberOne += value;
        screen.innerText = numberOne;
    } else {
        numberTwo += value;
        screen.innerText = numberTwo;
    }
}


function setup() {

    //buttons
    /**
    document.getElementById("negative").addEventListener("click", negative(e))
    document.getElementById("percent").addEventListener("click", percent(e))
    document.getElementById("division").addEventListener("click", division(e))
    document.getElementById("factorial").addEventListener("click", factorial(e))
    document.getElementById("ln").addEventListener("click", naturallog(e))
    document.getElementById("sin").addEventListener("click", sine(e))
    document.getElementById("cos").addEventListener("click", cosine(e))
    document.getElementById("tan").addEventListener("click", tan(e))
    document.getElementById("log").addEventListener("click", logb(e))
    document.getElementById("nPr").addEventListener("click", perm(e))
    document.getElementById("nCr").addEventListener("click", choose(e))
    document.getElementById("power").addEventListener("click", power(e))
    document.getElementById("round").addEventListener("click", round(e))
    document.getElementById("e").addEventListener("click", euler(e))
    document.getElementById("pi").addEventListener("click", appendToDisplay(math.pi))
    document.getElementById("DEL").addEventListener("click", del(e))
    document.getElementById("decimal").addEventListener("click", decimal(e))
    */

    document.getElementById("AC").addEventListener("click", clear());
    document.getElementById("divideround").addEventListener("click", () => {if (!numberTwo) {screen.innerText = "//"; operator = divideround;}});
    document.getElementById("plus").addEventListener("click", () => {if (!numberTwo) {screen.innerText = "+"; operator = add;}})
    document.getElementById("minus").addEventListener("click", () => {if (!numberTwo) {screen.innerText = "-"; operator = subtract;}});
    document.getElementById("multiply").addEventListener("click", () => {if (!numberTwo) {screen.innerText = "*"; operator = multiply;}});
    document.getElementById("equals").addEventListener("click", () => {evaluate()});

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

    screen.innerText = "0";


}

setup();