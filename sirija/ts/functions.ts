export {};

//  BASIC FUNCTION
function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet("Sirija"));

//  FUNCTION WITH MULTIPLE PARAMETERS
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 20)); // 30

//  OPTIONAL PARAMETER
function printMessage(msg: string, emoji?: string): void {
  if (emoji) console.log(msg, emoji);
  else console.log(msg);
}
printMessage("Good Morning");
printMessage("Good Morning", "😊");

// DEFAULT PARAMETER
function multiply(a: number, b: number = 2): number {
  return a * b;
}
console.log(multiply(5)); // 10
console.log(multiply(5, 3)); // 15

//  ARROW FUNCTION
const square = (n: number): number => {
  return n * n;
};
console.log(square(4)); // 16

//  FUNCTION TYPE AS VARIABLE
let double: (x: number) => number;
double = function (x: number) {
  return x * 2;
};
console.log(double(10)); // 20

//  FUNCTION WITH OBJECT INPUT
type User = {
  name: string;
  age: number;
};

function printUser(user: User): void {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}
printUser({ name: "Sirija", age: 22 });

//  FUNCTION THAT RETURNS OBJECT
function createUser(name: string, age: number) {
  return {
    username: name,
    userAge: age,
    isActive: true,
  };
}
console.log(createUser("Siri", 22));

//  REST PARAMETERS (...args)
function sumAll(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15

// FUNCTION WITH UNION TYPES
function formatId(id: number | string): string {
  return `ID: ${id}`;
}
console.log(formatId(101));
console.log(formatId("USR_001"));

//  HIGHER-ORDER FUNCTION (FUNCTION RETURNS ANOTHER FUNCTION)
function makeMultiplier(multiplier: number) {
  return function (value: number): number {
    return value * multiplier;
  };
}
const triple = makeMultiplier(3);
console.log(triple(10)); // 30

// CALLBACK FUNCTION
function processUser(name: string, callback: (msg: string) => void) {
  callback(`Processing user: ${name}`);
}
processUser("Sirija", (message) => console.log(message));

//  GENERIC FUNCTION
function wrapValue<T>(value: T): T {
  return value;
}
console.log(wrapValue("Hello TS"));
console.log(wrapValue(100));
console.log(wrapValue(true));
