// variables

var a = 'shwarma';
console.log(a);

var Num = 22;
console.log(Num);


var num1 = 1.9;
var num2 = 1.9;

console.log(num1 * 10);
console.log(num1 + num2);
console.log(num1 % num2);
console.log(num1 / num2);
console.log(num1 - num2);
console.log(num1+= 20);
console.log(num2-= 30);


// funtions 

function Name() {
    return console.log(' hello faiz');
}
Name();

// Datatypes

let yourage = 19;
let yourname = 'faiz';
let name = {first: 'faiz', last: 'Shaikh'};
let truth = false;
let groceries = ['apple', 'mango', 'orange'];
let random;
let nothing = null;

// strings 

let fruitss = 'banana, apple, orange';

console.log(fruitss.length);
console.log(fruitss.indexOf('b'));
console.log(fruitss.slice(1, 4));
console.log(fruitss.replace('ban', 'fai'));
console.log(fruitss.toUpperCase());
console.log(fruitss.toLowerCase());
console.log(fruitss.charAt(4));
console.log(fruitss[5]);
console.log(fruitss.split(','));

// arrays 

let randomName = ['faiz', 'aditya', 'saurabh'];
let fruits = ['apple', 'orange', 'kiwi'];

console.log(fruits);
console.log(randomName);

// objects 

let student = {
    first: 'faiz', 
    last: 'Shaikh', 
    age: 19, 
    height: "6'2",
    studentInfo: function() {
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};
console.log(student.first);
console.log(student['last']);
student.first = 'aditya';
console.log(student.first);

console.log(student.studentInfo());

// conditional operator if and else
var Age = 'Your age?'

if ((Age >= 18) && (Age <= 35)) {
    status = 'taget demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}

// Switch Statement

switch (6) {
    case 0:
      Text = 'weekend'
    case 6:
      Text = 'weekend'
    default:
        Text = 'weekdays'
        break;
}



