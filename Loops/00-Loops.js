// The for Loop

/*
for (expression 1; expression 2; expression 3) {
    // code block to be executed
}

Expression 1 is executed (one time) before the execution of the code block.
Expression 2 defines the condition for executing the code block.
Expression 3 is executed (every time) after the code block has been executed.

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
*/

// For/Of and For/In Loops

//=> The For In Loop

/*
*** The JavaScript for in statement loops through the properties of an Object:

for (key in object) {
  // code block to be executed
}

==> The for in loop iterates over a person object
==> Each iteration returns a key (x)
==> The key is used to access the value of the key
==> The value of the key is person[x]

const person = {fname:"John", lname:"Doe", age:25};
for (let x in person) {
  console.log(x); // key
}

const numbers = [45, 4, 9, 16, 25];

for (let x in numbers) {
    console.log(x) // index    
    console.log(numbers[x]);
}

*/

//=> Array.forEach()

/*

const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  console.log(value);
}

numbers.forEach(function (value, index, array){
    console.log(value, index, array)
})

numbers.forEach((value, index, array) => {
    console.log(value, index, array)
})

==> The item value
==>The item index
==> The array itself

*/

//=> The For Of Loop

/*
*** The JavaScript for of statement loops through the values of an iterable object.

for (variable of iterable) {
  // code block to be executed
}

let objectArray = [
  { name: "jane", lastname: "doe" },
  { name: "john", lastname: "doe" },
];

let language = "JavaScript";

for (let x of language) {
  console.log(x.name);
}

*/

//=> The While Loop

/*

*** Loops can execute a block of code as long as a specified condition is true.
If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.

while (condition) {
  // code block to be executed
}

while (i < 10) {
  text += "The number is " + i;
  i++;
}

*/

//=> The Do While Loop

/*

The do while loop is a variant of the while loop. This loop will execute the code block once,
before checking if the condition is true, then it will repeat the loop as long as the condition is true.

do {
  // code block to be executed
}
while (condition);

The example below uses a do while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:

do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
*/

//=> While vs For

/*
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

for (;cars[i];) {
  text += cars[i];
  i++;
}

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  text += cars[i];
  i++;
}
*/

//=> Continue and Break

/*

The break statement "jumps out" of a loop.

The continue statement "jumps over" one iteration in the loop.

In the example above, the break statement ends the loop ("breaks" the loop) when the loop counter (i) is 3.

for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
This example skips the value of 3:

for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}

*/

console.log(2 == "2"); // true
console.log(2 === "2"); // false
