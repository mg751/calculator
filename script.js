




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

let num0;
let num1;
let result;
let firstInput;
let nextInput;
let storedNum;
let equalsResult;
let mode = 0;

function add () {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        result = result + arguments[i];
    };
    return result;
}

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


function addOp () {
    operator = "+";
    firstInput = storedNum;
    storedNum = 0;
    calcDisplay.textContent = ""; 
};


function displayInput(){
    calcDisplay.textContent += this.textContent;
    storedNum = parseInt(calcDisplay.textContent);
};


function fullClear() {
    calcDisplay.textContent = "";
    result = undefined;
    firstInput = undefined;
    nextInput = undefined;
}

function operate (){
    if (result){
        num0 = result
        num1 = storedNum
    } else {
        num0 = firstInput;
        num1 = storedNum;
    }

    if (operator == "+") {
        result = add(num0, num1);
        calcDisplay.textContent = result;
    }
};



// add event listeners

for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", displayInput);
}

clearBtn.addEventListener("click", fullClear);
addBtn.addEventListener("click", addOp);
equalsBtn.addEventListener("click", operate);







//functions



// function clearInput(){
//     calcDisplay.textContent = "";
// }; 

function fullClear() {
    calcDisplay.textContent = "";
    result = undefined;
    firstInput = undefined;
    nextInput = undefined;
}


// function opAdd () {
//     operator = "+";
//     if (result !== undefined){
//         num1 = result;
//         operate();

//         } else if (firstInput === undefined) {
//             firstInput = parseInt(calcDisplay.textContent);
//             clearInput();
//         } else {
//             num1 = parseInt(calcDisplay.textContent);
//             clearInput();
//             operate();
//         }   
// };



// let equalsOperate = function (){
//     if (equalsResult !== undefined){
//         num0 = num1;
//         num1 = parseInt(calcDisplay.textContent);
//     }
//     num0 = firstInput;
//     num1 = parseInt(calcDisplay.textContent);
//     switch(operator) {
//         case "*":
//             equalsResult = multiply(num0,num1);
//             calcDisplay.textContent = equalsResult;
//             break;
//         case "/":
//              equalsResult = divide(num0, num1);
//              calcDisplay.textContent = equalsResult;
//             break;
//         case "+":
//             equalsResult = add(firstInput, num1);
//             calcDisplay.textContent = equalsResult;
//             break;
//         case "-":
//             equalsResult = subtract(num0, num1);
//             calcDisplay.textContent = equalsResult;
//             break;
//         default:
//             alert("Please enter a valid operator");
//         }
// };












// function opAdd(){
//     if (firstInput === undefined && result !== undefined){
//         firstInput = parseInt(result);
//         nextInput = storedNum;
//         operate();
//         firstInput = undefined
//     } else if (firstInput === undefined) {        
//         firstInput = storedNum;
//         operator = "+";
//         clearInput();
//         storedNum = 0;
//     } else {
//         nextInput = storedNum;
//         operate();
//         firstInput = undefined;
//     }
// };

// function opMultiply(){
//     firstInput = calcDisplay.textContent;
//     clearInput();
//     operator = "*";
// };

// function opSubtract(){
//     firstInput = calcDisplay.textContent;
//     clearInput();
//     operator = "-";
// };

// function opDivide(){
//     firstInput = calcDisplay.textContent;
//     clearInput();
//     operator = "/";
// };



// multiplyBtn.addEventListener("click", opMultiply);
// subtractBtn.addEventListener("click", opSubtract);
// divideBtn.addEventListener("click", opDivide);
