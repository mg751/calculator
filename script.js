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
            alert("Please enter an operator");
}};




// 2. Create a new function operate that takes an operator 
// and 2 numbers and then calls one of the above functions on the numbers.




