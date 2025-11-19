export {};

//  BASIC NUMBER ARRAY
let numbers: number[] = [10, 20, 30];
console.log("Numbers:", numbers);

//  BASIC STRING ARRAY
let fruits: string[] = ["apple", "banana", "mango"];
console.log("Fruits:", fruits);

//  ARRAY USING GENERIC SYNTAX
let marks: Array<number> = [85, 90, 78];
console.log("Marks:", marks);

//  MIXED ARRAY (UNION TYPES)
let mixed: (string | number | boolean)[] = ["Siri", 22, true];
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
fruits.forEach((item) => console.log("Fruit:", item));

//  MAP (creates new array)
let doubled = numbers.map((n) => n * 2);
console.log("Doubled:", doubled);

//  FILTER (condition-based items)
let filtered = numbers.filter((n) => n > 15);
console.log("Filtered > 15:", filtered);

//  FIND (returns first match)
let found = fruits.find((f) => f.startsWith("a"));
console.log("Found starting with 'a':", found);

//  SORTING ARRAY
let sortedMarks = [...marks].sort((a, b) => a - b);
console.log("Sorted Marks:", sortedMarks);

//  READONLY ARRAY (cannot modify)
const readonlyNames: readonly string[] = ["Siri", "Riya"];
// readonlyNames.push("NewName"); Error
console.log("Readonly:", readonlyNames);

//  ARRAY OF OBJECTS
type User = {
  id: number;
  name: string;
};

let users: User[] = [
  { id: 1, name: "Siri" },
  { id: 2, name: "Ravi" },
];

users.push({ id: 3, name: "Kiran" });
console.log("Users:", users);

//  ARRAY OF ARRAYS (2D array)
let matrix: number[][] = [
  [1, 2],
  [3, 4],
];
console.log("Matrix:", matrix);

//  TUPLES INSIDE ARRAY
let studentScores: [string, number][] = [
  ["Siri", 95],
  ["Ravi", 88],
];
console.log("Student Scores:", studentScores);

//  DESTRUCTURING ARRAY
let [first, second] = fruits;
console.log("Destructured:", first, second);

//  SPREAD OPERATOR (...)
let newNumbers = [...numbers, 100, 200];
console.log("Spread:", newNumbers);

//  COMBINING ARRAYS
let combined = [...fruits, ...["guava", "papaya"]];
console.log("Combined:", combined);

//  CHECKING ARRAY TYPE (Array.isArray)
console.log("Is array?", Array.isArray(numbers)); // true

//  REDUCE (single value output)
let total = numbers.reduce((sum, n) => sum + n, 0);
console.log("Total Sum:", total);

//  EVERY / SOME
console.log(
  "All > 10?",
  numbers.every((n) => n > 10)
);
console.log(
  "At least one > 25?",
  numbers.some((n) => n > 25)
);

//  FIND INDEX
let index = fruits.findIndex((f) => f === "banana");
console.log("Banana index:", index);

//  REMOVE SPECIFIC VALUE
let removed = fruits.filter((f) => f !== "banana");
console.log("Removed banana:", removed);
