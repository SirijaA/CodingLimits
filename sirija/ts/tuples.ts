export {};

//  BASIC TUPLE (FIXED TYPE + ORDER)
let userTuple: [string, number, boolean];
userTuple = ["Siri", 22, true];
console.log("Basic Tuple:", userTuple);

//  ACCESSING TUPLE VALUES
console.log("Name:", userTuple[0]);
console.log("Age:", userTuple[1]);
console.log("Active:", userTuple[2]);

//  TUPLE WITH TYPE ALIAS
type Employee = [id: number, name: string, isActive: boolean];
let emp1: Employee = [101, "Ravi", true];
console.log("Employee Tuple:", emp1);

//  TUPLE WITH OPTIONAL ELEMENT
let tupleWithOptional: [number, string, boolean?];
tupleWithOptional = [1, "Test"];
console.log("Tuple With Optional:", tupleWithOptional);

//  READONLY TUPLE
const readonlyTuple: readonly [number, string] = [200, "Success"];
console.log("Readonly Tuple:", readonlyTuple);
// readonlyTuple[0] = 300;  Error (cannot modify)

//  ARRAY OF TUPLES
let students: [string, number][] = [
  ["Siri", 95],
  ["Kiran", 88],
  ["Riya", 76],
];
console.log("Array of Tuples:", students);

//  LOOPING THROUGH ARRAY OF TUPLES
students.forEach(([name, marks]) =>
  console.log(`Student: ${name}, Marks: ${marks}`)
);

//  TUPLE RETURN TYPE FROM FUNCTION
function getUser(): [string, number] {
  return ["Sirija", 22];
}
const [userName, userAge] = getUser();
console.log("Function Tuple Return:", userName, userAge);

//  TUPLE WITH REST ELEMENTS
type StringNumberRest = [string, ...number[]];
let result: StringNumberRest = ["scores", 10, 20, 30];
console.log("Tuple With Rest:", result);

//  DESTRUCTURING TUPLE
let rgb: [number, number, number] = [255, 100, 50];
let [red, green, blue] = rgb;
console.log("RGB Values:", red, green, blue);

//  SWAPPING VALUES USING TUPLE
let a = 10,
  b = 20;
[a, b] = [b, a];
console.log("Swapped Values:", a, b);

//  NAMED TUPLE (FOR READABILITY)
type ApiResponse = [statusCode: number, message: string, success: boolean];
let response: ApiResponse = [200, "OK", true];
console.log("Named Tuple:", response);

//  NESTED TUPLE
let nestedTuple: [string, [number, number]];
nestedTuple = ["Point", [10, 20]];
console.log("Nested Tuple:", nestedTuple);

//  UNION TYPES WITH TUPLES
let data: [string, number] | [number, string];
data = ["Age", 22];
console.log("Union Tuple 1:", data);

data = [101, "Employee"];
console.log("Union Tuple 2:", data);
