"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
//  BASIC NUMBER ARRAY
var numbers = [10, 20, 30];
console.log("Numbers:", numbers);
//  BASIC STRING ARRAY
var fruits = ["apple", "banana", "mango"];
console.log("Fruits:", fruits);
//  ARRAY USING GENERIC SYNTAX
var marks = [85, 90, 78];
console.log("Marks:", marks);
//  MIXED ARRAY (UNION TYPES)
var mixed = ["Siri", 22, true];
console.log("Mixed:", mixed);
//  ADDING ELEMENTS (push)
fruits.push("orange");
console.log("After push:", fruits);
//  REMOVING LAST ELEMENT (pop)
fruits.pop();
console.log("After pop:", fruits);
//  ADD AT START (unshift)
numbers.unshift(5);
console.log("After unshift:", numbers);
//  REMOVE FROM START (shift)
numbers.shift();
console.log("After shift:", numbers);
//  ITERATING ARRAY (forEach)
fruits.forEach(function (item) { return console.log("Fruit:", item); });
//  MAP (creates new array)
var doubled = numbers.map(function (n) { return n * 2; });
console.log("Doubled:", doubled);
//  FILTER (condition-based items)
var filtered = numbers.filter(function (n) { return n > 15; });
console.log("Filtered > 15:", filtered);
//  FIND (returns first match)
var found = fruits.find(function (f) { return f.startsWith("a"); });
console.log("Found starting with 'a':", found);
//  SORTING ARRAY
var sortedMarks = __spreadArray([], marks, true).sort(function (a, b) { return a - b; });
console.log("Sorted Marks:", sortedMarks);
//  READONLY ARRAY (cannot modify)
var readonlyNames = ["Siri", "Riya"];
// readonlyNames.push("NewName"); Error
console.log("Readonly:", readonlyNames);
var users = [
    { id: 1, name: "Siri" },
    { id: 2, name: "Ravi" },
];
users.push({ id: 3, name: "Kiran" });
console.log("Users:", users);
//  ARRAY OF ARRAYS (2D array)
var matrix = [
    [1, 2],
    [3, 4],
];
console.log("Matrix:", matrix);
//  TUPLES INSIDE ARRAY
var studentScores = [
    ["Siri", 95],
    ["Ravi", 88],
];
console.log("Student Scores:", studentScores);
//  DESTRUCTURING ARRAY
var first = fruits[0], second = fruits[1];
console.log("Destructured:", first, second);
//  SPREAD OPERATOR (...)
var newNumbers = __spreadArray(__spreadArray([], numbers, true), [100, 200], false);
console.log("Spread:", newNumbers);
//  COMBINING ARRAYS
var combined = __spreadArray(__spreadArray([], fruits, true), ["guava", "papaya"], false);
console.log("Combined:", combined);
//  CHECKING ARRAY TYPE (Array.isArray)
console.log("Is array?", Array.isArray(numbers)); // true
//  REDUCE (single value output)
var total = numbers.reduce(function (sum, n) { return sum + n; }, 0);
console.log("Total Sum:", total);
//  EVERY / SOME
console.log("All > 10?", numbers.every(function (n) { return n > 10; }));
console.log("At least one > 25?", numbers.some(function (n) { return n > 25; }));
//  FIND INDEX
var index = fruits.findIndex(function (f) { return f === "banana"; });
console.log("Banana index:", index);
//  REMOVE SPECIFIC VALUE
var removed = fruits.filter(function (f) { return f !== "banana"; });
console.log("Removed banana:", removed);
