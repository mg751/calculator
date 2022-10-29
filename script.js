// stop clearing text on operator selection
// clear text on number selection after operator has been chosen
//




const calcDisplay = document.getElementById("displayvalue");
const numBtns = document.getElementById("numbers").children;
const clearBtn = document.getElementById("clearbtn");
const multiplyBtn = document.getElementById("multiplybtn");
const addBtn = document.getElementById("addbtn");
const divideBtn = document.getElementById("dividebtn");
const subtractBtn  = document.getElementById("subtractbtn");
const equalsBtn = document.getElementById("equalsbtn");
const decimalBtn = document.getElementById("decimal");


let num0;
let num1;
let result;
let firstInput;
let nextInput;
let storedNum;
let counter = 0;
let operator;


function roundToTwo (num){
    return Math.round((num + Number.EPSILON) * 1000000000) / 1000000000;
};


function add () {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        result = result + arguments[i];
    };
    return result;
};

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
    decimalBtn.disabled = false;
    if (operator !== "+" || operator === undefined) {
        operator = "+";
        counter = 0;
    }
    if (counter > 0) {
        operate();
        counter--;
    }
    operator = "+";
    firstInput = storedNum;
    storedNum = 0;
    calcDisplay.textContent = ""; 
    counter++;
};

function subtractOp () {
    decimalBtn.disabled = false;
    if (operator !== "-"|| operator === undefined) {
        operator = ".";
        counter = 0;
    }
    if (counter > 0) {
        operate();
        counter--;
    }
    operator = "-";
    firstInput = storedNum;
    storedNum = 0;
    calcDisplay.textContent = ""; 
    counter++;
};

function divideOp () {
    decimalBtn.disabled = false;
    if (operator !== "/"|| operator === undefined) {
        operator = "/";
        counter = 0;
    }
    if (counter > 0) {
        operate();
        counter--;
    }
    operator = "/";
    firstInput = storedNum;
    storedNum = 0;
    calcDisplay.textContent = ""; 
    counter++;
};

function multiplyOp () {
    decimalBtn.disabled = false;
    if (operator !== "*"|| operator === undefined) {
        operator = "*";
        counter = 0;
    }
    if (counter > 0) {
        operate();
        counter--;
    }
    operator = "*";
    firstInput = storedNum;
    storedNum = 0;
    calcDisplay.textContent = ""; 
    counter++;
};


function displayInput(){
    calcDisplay.textContent += this.textContent;
    storedNum = parseFloat(calcDisplay.textContent);
    if (storedNum % 1 !== 0) {
        decimalBtn.disabled = true;
    }
};


function fullClear() {
    calcDisplay.textContent = "";
    result = undefined;
    firstInput = undefined;
    nextInput = undefined;
};

function operate (){
    if (operator === undefined || storedNum === undefined) {
        return;
    }

    if (result){
        num0 = result;
        num1 = storedNum;
    } else {
        num0 = firstInput;
        num1 = storedNum;
    }

    if (operator == "+") {
        result = add(num0, num1);
        calcDisplay.textContent = roundToTwo(result);
    } else if (operator == "*") {
        result = multiply(num0, num1);
        calcDisplay.textContent = roundToTwo(result);
    } else if (operator == "/") {
        if (storedNum === 0) {
            alert("Error! You can't divide by Zero");
            return fullClear();
        }
        result = divide(num0, num1);
        calcDisplay.textContent = roundToTwo(result);
    } else if (operator == "-") {
        result = subtract(num0, num1);
        calcDisplay.textContent = roundToTwo(result);
    }
    counter--;
};


for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", displayInput);
};

decimalBtn.addEventListener("click", displayInput);
clearBtn.addEventListener("click", fullClear);
addBtn.addEventListener("click", addOp);
equalsBtn.addEventListener("click", operate);
multiplyBtn.addEventListener("click", multiplyOp);
subtractBtn.addEventListener("click", subtractOp);
divideBtn.addEventListener("click", divideOp);

function fullClear() {
    calcDisplay.textContent = "";
    storedNum = undefined;
    decimalBtn.disabled = false;
    result = undefined;
    firstInput = undefined;
    nextInput = undefined;
    num1 = undefined;
    num0 = undefined;
    operator = undefined;
    counter = 0;
};
