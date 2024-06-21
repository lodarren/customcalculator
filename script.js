let numberone = NaN
let numbertwo = NaN
let operator = NaN
let displaynumber = 0

function setup() {

    //buttons
    document.getElementById("AC").addEventListener("click", clear(e))
    document.getElementById("negative").addEventListener("click", negative(e))
    document.getElementById("percent").addEventListener("click", percent(e))
    document.getElementById("division").addEventListener("click", division(e))
    document.getElementById("factorial").addEventListener("click", factorial(e))
    document.getElementById("ln").addEventListener("click", naturallog(e))
    document.getElementById("sin").addEventListener("click", sine(e))
    document.getElementById("cos").addEventListener("click", cosine(e))
    document.getElementById("tan").addEventListener("click", tan(e))
    document.getElementById("divideround").addEventListener("click", divideround(e))
    document.getElementById("log").addEventListener("click", logb(e))
    document.getElementById("nPr").addEventListener("click", perm(e))
    document.getElementById("nCr").addEventListener("click", choose(e))
    document.getElementById("power").addEventListener("click", power(e))
    document.getElementById("add").addEventListener("click", add(e))
    document.getElementById("seven").addEventListener("click", seven(e))
    document.getElementById("eight").addEventListener("click", eight(e))
    document.getElementById("nine").addEventListener("click", nine(e))
    document.getElementById("round").addEventListener("click", round(e))
    document.getElementById("subtract").addEventListener("click", subtract(e))
    document.getElementById("four").addEventListener("click", four(e))
    document.getElementById("five").addEventListener("click", five(e))
    document.getElementById("six").addEventListener("click", six(e))
    document.getElementById("e").addEventListener("click", euler(e))
    document.getElementById("multiply").addEventListener("click", multiply(e))
    document.getElementById("one").addEventListener("click", one(e))
    document.getElementById("two").addEventListener("click", two(e))
    document.getElementById("three").addEventListener("click", three(e))
    document.getElementById("pi").addEventListener("click", pi(e))
    document.getElementById("DEL").addEventListener("click", del(e))
    document.getElementById("zero").addEventListener("click", zero(e))
    document.getElementById("decimal").addEventListener("click", decimal(e))
    document.getElementById("equals").addEventListener("click", equals(e))


}

setup()