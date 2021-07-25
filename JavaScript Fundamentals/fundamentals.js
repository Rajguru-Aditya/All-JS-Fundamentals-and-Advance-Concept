// ----------------->Variables<----------------

const a = "shwarma";
console.log(a);

const Num = 22;
console.log(Num);

let num1 = 1.9;
let num2 = 1.9;

console.log(num1 * 10); // Output: 19
console.log(num1 + num2); // Output: 3.8
console.log(num1 % num2); // Output: 0
console.log(num1 / num2); // Output: 1
console.log(num1 - num2); // Output: 0
console.log((num1 += 20)); // Output: 21.9
console.log((num2 -= 30)); // Output: -28.1

// ------------------->Funtions<---------------

function Name() {
  return console.log("Hello Faiz");
}
Name();

// -------------->Datatypes<--------------------

let yourage = 19; // Integer/Number
let yourname = "faiz"; // String
let name = { first: "faiz", last: "Shaikh" }; // Object
let truth = false; // Boolean
let groceries = ["apple", "mango", "orange"]; // Array
let random;
let nothing = null;

// ---------------->strings<------------------

let fruitss = "banana, apple, orange";

// ---------------->Performing operations on string<-----------------

console.log(fruitss.length); // Output: 21
console.log(fruitss.indexOf("b")); // Output: 0
console.log(fruitss.slice(1, 4)); // Output: ana
console.log(fruitss.replace("ban", "fai")); // Output: faiana, appla, orange
console.log(fruitss.toUpperCase()); // Output: BANANA, APPLE, ORANGE
console.log(fruitss.toLowerCase()); // Output: banana, appla, orange
console.log(fruitss.charAt(4)); // Output: n
console.log(fruitss[5]); // Output: a
console.log(fruitss.split(",")); // Output: ["banana", " apple", " orange"]

// --------------->Arrays<------------------

let randomName = ["faiz", "aditya", "saurabh"];
let fruits = ["apple", "orange", "kiwi"];

console.log(fruits);
console.log(randomName);

// ---------------->Objects<---------------

let student = {
  first: "Faiz",
  last: "Shaikh",
  age: 19,
  height: "6'2",
  studentInfo: function () {
    return this.first + "\n" + this.last + "\n" + this.age; // "\n" is used to move to next line
  },
};
console.log(student.first); // Output: Faiz
console.log(student["last"]); // Output: Shaikh
student.first = "Aditya";
console.log(student.first); // Output: Aditya
console.log(student.studentInfo());
// Output:
// Aditya
// Shaikh
// 19

// ------------------->conditional operator if and else<---------------
const Age = 19;
let targetAudience;
if (Age >= 18 && Age <= 35) {
  targetAudience = "Yes, this is my target Audience";
} else {
  targetAudience = "Not my audience";
}
console.log(targetAudience);

// ----------------->Switch Statement<-------------------

const day = 4;
switch (day) {
  case 0:
    text = "weekend";
    break;
  case 6:
    text = "weekend";
    break;
  default:
    text = "weekdays";
    break;
}
console.log(text);

// ---------------> Spread Operator <-----------
const cirtus = ["lime", "lemon", "orange"];
const fruits = ["banana", "apple", "coconut"];
const mixFruit = [...cirtus, ...fruits];
console.log(mixFruit); // Output: ["lime", "lemon", "orange", "banana", "apple", "coconut"]

const fullName = {
  fName: "James",
  lName: "Bond",
};
const userProfile = {
  ...fullName,
  username: "jamesbond007",
  email: "james007@bond.com",
};
console.log(userProfile);
// Output: {fName: "James", lName: "Bond", username: "jamesbond007", email: "james007@bond.com"}
