

let subtract = function() {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        result = result - arguments[i];
    };
    return result;
};

let multiply = function() {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        result *= arguments[i];
    };
    return result;
};

let divide = function() {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        result /= arguments[i];
    };
    return result;
};



// 5. Make the calculator work! You’ll need to store the first number that is 
//input into the calculator when a user presses an operator, 
// and also save which operation has been chosen and then operate() 
// on them when the user presses the “=” key.
// You should already have the code that can populate the display, 
//so once operate() has been called, update the display with the ‘solution’ 
//to the operation.
//This is the hardest part of the project. You need to figure out how to store 
// all the values and call the operate function with them.

//select dom elements

const calcDisplay = document.getElementById("displayvalue");
const numBtns = document.getElementById("numbers").children;
const clearBtn = document.getElementById("clearbtn");
const multiplyBtn = document.getElementById("multiplybtn");
const addBtn = document.getElementById("addbtn");
const divideBtn = document.getElementById("dividebtn");
const subtractBtn  = document.getElementById("subtractbtn");
const equalsBtn = document.getElementById("equalsbtn");

let num0 = undefined;
let num1 = undefined;
let result = undefined;
let firstInput = undefined;
let nextInput = undefined;

//functions

function displayInput(){
    calcDisplay.textContent += this.textContent;
};

function clearInput(){
    calcDisplay.textContent = "";
}; 

function opAdd(){
    firstInput = calcDisplay.textContent;
    clearInput();
    operator = "+";
};

function opMultiply(){
    firstInput = calcDisplay.textContent;
    clearInput();
    operator = "*";
};

function opSubtract(){
    firstInput = calcDisplay.textContent;
    clearInput();
    operator = "-";
};

function opDivide(){
    firstInput = calcDisplay.textContent;
    clearInput();
    operator = "/";
};


let add = function() {
    return result = (num0 + num1);
};

let operate = function (){
    nextInput = calcDisplay.textContent;
    num0 = parseInt(firstInput);
    num1 = parseInt(nextInput);
    switch(operator) {
        case "*":
            result = multiply(num0,num1);
            calcDisplay.textContent = result;
            break;
        case "/":
             result = divide(num0, num1);
             calcDisplay.textContent = result;
            break;
        case "+":
            result = add(num0, num1);
            calcDisplay.textContent = result;
            break;
        case "-":
            result = subtract(num0, num1);
            calcDisplay.textContent = result;
            break;
        default:
            alert("Please enter a valid operator");
        }
    };


// add event listeners

for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", displayInput);
}

clearBtn.addEventListener("click", clearInput);
addBtn.addEventListener("click", opAdd);
equalsBtn.addEventListener("click", operate);
multiplyBtn.addEventListener("click", opMultiply);
subtractBtn.addEventListener("click", opSubtract);
divideBtn.addEventListener("click", opDivide);
