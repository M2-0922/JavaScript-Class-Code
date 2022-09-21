// let name = "Joe";
// console.log(todayHour);
// if (name === "Joe") {
//   console.log("Good Evening Joe.");
// } else {
//   console.log("Good Evening Jane.");
// }

let count = 5;

// if (count == 0) {
//   //false
// //   console.log("Count is zero");
// } else if (count == 1) {
// //   console.log("Count is one");
// } else if (count == 2) {
// //   console.log("Count is two");
// } else {
// //   console.log("Count is different");
// }

// if (count == 5) {
//   console.log("Count is five");
// }

/*
switch(expression) {
  case x: 
    // logic
    break;
  case y:
    // logic
    break;  
  default:
    // logic
    break;
}
*/

//
// console.log(new Date().getDay());
switch (new Date().getDay()) {
  /*
    askdakdakdk
    aksdskadksa
    
    */
  // Date is a library for use time
  // new Date().getDay() will return a number
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("I am in Mars");
}

let name = "Adam";
let greeting;
switch (name) {
  case "Jane":
    greeting = "Hello Jane";
    break;
  case "Adam":
    greeting = "Hello Adam";
    break;
  default:
    greeting = "Hello World!";
    break;
}

// console.log(greeting);


var score1 = 20;
var score2 = 30;
var score3 = 35;

var totalPassScore = 70;

var isPassed = ((score1 + score2 + score3) >= totalPassScore);
// isPassed will have true or false depend on the condition.
// console.log(isPassed);

// if(isPassed){
//     // logic
//     console.log("Success");
// }else{
//     // logic
//     console.log("Fail");
// }

var classScore = [
    {
        name:"Joe",
        GPA: 3.4,
        department: "Software"
    },
    {
        name:"John",
        GPA: 3.7,
        department: "Software"
    },
    {
        name:"Alex",
        GPA: 3.9,
        department: "UI/UX"
    }
]

var GPA = 3.6;

function isGPAPassed(arr) {
    for(let i = 0; i < 3; i++){
        if(arr[i].GPA >= GPA){
            console.log(arr[i].name + " is Passed the " + arr[i].department);
        }else{
            console.log(arr[i].name + " is Failed the " + arr[i].department);
        }
    }
}

// isGPAPassed(classScore)

// type coercion

// console.log('1' > 0); // true

// console.log('1' == 1); // true

// console.log('1' === 1); // false

// var arr = [0,1,2,3]
for(let i = 0; i < 2; i++){
    console.log("----");
    console.log("i", i);
    console.log("----");
    for(let j=0; j < 4; j++){
        console.log("=====");
        console.log("j", j);
        console.log("=====");
        if(j == 1){
            continue;
        }
    }

}