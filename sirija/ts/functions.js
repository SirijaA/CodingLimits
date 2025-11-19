"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  BASIC FUNCTION
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Sirija"));
//  FUNCTION WITH MULTIPLE PARAMETERS
function add(a, b) {
    return a + b;
}
console.log(add(10, 20)); // 30
//  OPTIONAL PARAMETER
function printMessage(msg, emoji) {
    if (emoji)
        console.log(msg, emoji);
    else
        console.log(msg);
}
printMessage("Good Morning");
printMessage("Good Morning", "😊");
// DEFAULT PARAMETER
function multiply(a, b) {
    if (b === void 0) { b = 2; }
    return a * b;
}
console.log(multiply(5)); // 10
console.log(multiply(5, 3)); // 15
//  ARROW FUNCTION
var square = function (n) {
    return n * n;
};
console.log(square(4)); // 16
//  FUNCTION TYPE AS VARIABLE
var double;
double = function (x) {
    return x * 2;
};
console.log(double(10)); // 20
function printUser(user) {
    console.log("Name: ".concat(user.name, ", Age: ").concat(user.age));
}
printUser({ name: "Sirija", age: 22 });
//  FUNCTION THAT RETURNS OBJECT
function createUser(name, age) {
    return {
        username: name,
        userAge: age,
        isActive: true,
    };
}
console.log(createUser("Siri", 22));
//  REST PARAMETERS (...args)
function sumAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (a, b) { return a + b; }, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15
// FUNCTION WITH UNION TYPES
function formatId(id) {
    return "ID: ".concat(id);
}
console.log(formatId(101));
console.log(formatId("USR_001"));
//  HIGHER-ORDER FUNCTION (FUNCTION RETURNS ANOTHER FUNCTION)
function makeMultiplier(multiplier) {
    return function (value) {
        return value * multiplier;
    };
}
var triple = makeMultiplier(3);
console.log(triple(10)); // 30
// CALLBACK FUNCTION
function processUser(name, callback) {
    callback("Processing user: ".concat(name));
}
processUser("Sirija", function (message) { return console.log(message); });
//  GENERIC FUNCTION
function wrapValue(value) {
    return value;
}
console.log(wrapValue("Hello TS"));
console.log(wrapValue(100));
console.log(wrapValue(true));
