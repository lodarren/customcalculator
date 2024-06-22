# customcalculator

This is a custom calculator project!


Mostly works like a normal calculator, but with a couple quirks: 
- Operators that use a single parameter work like "number" -> "operator". So for example if I wanted to evaluate "sin(3)", then I would do "3" -> "sin". 
- Factorials with a non-integer values don't give defined values, sorry! (This extends to nPr and nCr functions). 
- deg/rad stands for degrees and radians, and the trig functions that use them will assume the input you are inputting are either in degrees or radians depending on the mode. 
- Answers of any operation will always be assumed to be the first parameter of any future operation. Click on any other number / clear if you want to move on to another calculation. 
- // is the same as division, except it always rounds to the nearest integer. 
- ln always assumes base e, while log takes in a second arguement which is the base of the logarithm. 
- This calculator will not allow leading 0s. 
- You cannot have multiple decimal points. Any operation will result in an error. 
- This calculator can only display up to 15 digits. Any larger than that it uses the following formula: 
    1. If there is a decimal place, then it stops displaying the largest place values first.
    2. If there is no decimal place, then it stops displaying the smallest place values first. 

