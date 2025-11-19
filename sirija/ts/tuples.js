"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
//  BASIC TUPLE (FIXED TYPE + ORDER)
var userTuple;
userTuple = ["Siri", 22, true];
console.log("Basic Tuple:", userTuple);
//  ACCESSING TUPLE VALUES
console.log("Name:", userTuple[0]);
console.log("Age:", userTuple[1]);
console.log("Active:", userTuple[2]);
var emp1 = [101, "Ravi", true];
console.log("Employee Tuple:", emp1);
//  TUPLE WITH OPTIONAL ELEMENT
var tupleWithOptional;
tupleWithOptional = [1, "Test"];
console.log("Tuple With Optional:", tupleWithOptional);
//  READONLY TUPLE
var readonlyTuple = [200, "Success"];
console.log("Readonly Tuple:", readonlyTuple);
// readonlyTuple[0] = 300;  Error (cannot modify)
//  ARRAY OF TUPLES
var students = [
    ["Siri", 95],
    ["Kiran", 88],
    ["Riya", 76],
];
console.log("Array of Tuples:", students);
//  LOOPING THROUGH ARRAY OF TUPLES
students.forEach(function (_a) {
    var name = _a[0], marks = _a[1];
    return console.log("Student: ".concat(name, ", Marks: ").concat(marks));
});
//  TUPLE RETURN TYPE FROM FUNCTION
function getUser() {
    return ["Sirija", 22];
}
var _b = getUser(), userName = _b[0], userAge = _b[1];
console.log("Function Tuple Return:", userName, userAge);
var result = ["scores", 10, 20, 30];
console.log("Tuple With Rest:", result);
//  DESTRUCTURING TUPLE
var rgb = [255, 100, 50];
var red = rgb[0], green = rgb[1], blue = rgb[2];
console.log("RGB Values:", red, green, blue);
//  SWAPPING VALUES USING TUPLE
var a = 10, b = 20;
_a = [b, a], a = _a[0], b = _a[1];
console.log("Swapped Values:", a, b);
var response = [200, "OK", true];
console.log("Named Tuple:", response);
//  NESTED TUPLE
var nestedTuple;
nestedTuple = ["Point", [10, 20]];
console.log("Nested Tuple:", nestedTuple);
//  UNION TYPES WITH TUPLES
var data;
data = ["Age", 22];
console.log("Union Tuple 1:", data);
data = [101, "Employee"];
console.log("Union Tuple 2:", data);
