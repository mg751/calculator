let add = function() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++){
        total = total + arguments[i];
    };
    return total;
};

let subtract = function() {
    let total = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        total = total - arguments[i];
    };
    return total;
};

let multiply = function() {
    let total = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        total *= arguments[i];
    };
    return total;
};

let divide = function() {
    let total = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        total /= arguments[i];
    };
    return total;
};

let operate = function (num0, operator, num1){
    let result = 0;
    switch(operator) {
        case "*":
            return multiply(num0,num1);
            break;
        case "/":
            return divide(num0, num1);
            break;
        case "+":
            return add(num0, num1);
            break;
        case "-":
            return subtract(num0, num1);
            break;
        default:
            alert("Please enter a valid operator");
}};


// 5. Make the calculator work! You’ll need to store the first number that is 
//input into the calculator when a user presses an operator, 
// and also save which operation has been chosen and then operate() 
// on them when the user presses the “=” key.
// You should already have the code that can populate the display, 
//so once operate() has been called, update the display with the ‘solution’ 
//to the operation.
//This is the hardest part of the project. You need to figure out how to store 
// all the values and call the operate function with them.

const calcDisplay = document.getElementById("displayvalue");
const numBtns = document.getElementById("numbers").children;
const clearBtn = document.getElementById("clearbtn");
const multiplyBtn = document.getElementById("multiplybtn");
const addBtn = document.getElementById("addbtn");
const divideBtn = document.getElementById("dividebtn");
const subtractBtn  = document.getElementById("subtractbtn");
const equalsBtn  = document.getElementById("equalsbtn");


function storeInput(){
    console.log(this.textContent);
    calcDisplay.textContent += this.textContent;
};

function clearInput(){
    calcDisplay.textContent = "";
} 


for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", storeInput);
}

clearBtn.addEventListener("click", clearInput);

