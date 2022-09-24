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
let counter = 0;

function fullClear() {
    calcDisplay.textContent = "";
    result = undefined;
    firstInput = undefined;
    nextInput = undefined;
    storedNum = undefined;
    num1 = undefined;
    num0 = undefined;
}


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
    } else if (operator == "*") {
        result = multiply(num0, num1);
        calcDisplay.textContent = result;
    } else if (operator == "/") {
        result = divide(num0, num1);
        calcDisplay.textContent = result;
    } else if (operator == "-") {
        result = subtract(num0, num1);
        calcDisplay.textContent = result;
    }
};



for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", displayInput);
}

clearBtn.addEventListener("click", fullClear);
addBtn.addEventListener("click", addOp);
equalsBtn.addEventListener("click", operate);
multiplyBtn.addEventListener("click", multiplyOp);
subtractBtn.addEventListener("click", subtractOp);
divideBtn.addEventListener("click", divideOp);
