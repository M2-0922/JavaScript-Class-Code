/*

i = i + 3
i += 3

for (let i = 10; i >= 0; ) {
  // i = 10
  console.log("======");
  console.log(--i);
  // 10
}

let arr = [0, 2, 4, 6, 8, 10];

for (let i = 0; i < arr.length; i++) {
i is start from 0
every step i will be increase
i == 0
}

for (let x = 0; x < 10; x++) {
    // x == 0
    // console.log("x is: ", x);
    for (let y = 0; y < 5; y++) {
      // console.log("=========");
      // console.log("y is ", y);
      //y == 0
      //y == 1
      //y == 2
      //y == 3
      //y == 4
    }
  }
  
  let obj = { name: "Kubilay" };
  // console.log(obj.name); // Kubilay
  
  let arr = ["one", "two", "three", "four"];
  let objArr = [
    {
      name: "John",
      lastname: "Doe",
    },
    {
      name: "Jane",
      lastname: "Doe",
    },
  ];
  
  for (let i = 0; i < objArr.length; i++) {
    console.log(objArr[i].name);
    // first step
    // objArr[0] => {name: "John",lastname: "Doe"}
    // .name => John
  
    // second step
    // objArr[1] => {name: "Jane",lastname: "Doe"}
    // .name => Jane
  }
  
  
  for(expression1; expression2; expression3;){
  
  }
  
  //=> for in
  
  for(key in object){
    // logic
  }
  
  const obj = {
    number1: 1,
    number2: 2,
    number3: 3,
  };
  
  for (let x in obj) {
    console.log(x); // returns keys
    console.log(obj[x]); // returns values
  }
  
  const person = {
    fName: "Jane",
    lName: "Alex",
    age: 30,
    location: "Vancouver",
  };
  
  for (let x in person) {
    //this for loop will return 4 times.
    console.log(x);
    console.log(x + " => " + person[x]);
    // x => fName
    // person[fName] => Jane
    // Jane
    // Alex
    // 30
    // Vancouver
  }
  
  //=> for of
  
  
  for(let x of iterable){
    // logics
  }
  
  let arr = [
    1,
    2,
    "Hello",
    "World",
    false,
    true,
    {
      name: "jane",
      lastname: "doe",
    },
    {
      name: "john",
      lastname: "doe",
    },
  ];
  
  for (let x of arr) console.log(x);
  
  // console.log("============");
  
  for (let x = 0; x < arr.length; x++) console.log(arr[x]);
  
  let greeting = "Hello World!";
  
  for (let x of greeting) {
    //
    console.log(x);
    // H
    // e
    // l
  }
  
  let arr2 = [
    {
      fName: "Alex",
      lName: "Mart",
      location: "Toronto",
    }, // object
    "Hello", // string
    "World", // string
    "Foo", // string
    2,
  ];
  
  for (let a of arr2) {
    if (typeof a === "object") {
      // condition is saying => if a's type is equal to object
      console.log("This is object");
    } else if (typeof a === "string") {
      // condition is saying => if a's type is equal to string
      console.log("This is string");
    } else {
      console.log("This is not object and not string");
    }
  }
  
  const nameArray = ["Hello", "Alex", "Mari", "Aya", "Mustafa", 5];
  
  for (let i of nameArray) {
    if (i == "Hello") {
      console.log(i);
    } else if (i == "Alex") {
      console.log(i);
    } else if (i == "Mari") {
      console.log(i);
    } else if (i == "Aya") {
      console.log(i);
    } else if (i == "Mustafa") {
      console.log(i);
    }
  }
  
  //=> While loop
  
    while (condition){
      // code & logic
    }
  
  let i = 0;
  let text;
  
  const numberArray = [1, 2, 3, 4, 5, 6];
  
  while (i <= numberArray.length) {
    console.log(i);
    i++;
  }
  console.log("==========");
  for (let i = 0; i <= numberArray.length; i++) {
    console.log(i);
  }
  
  //=> Do..while
  
  
  do {
  
  }
  while (condition)

  // let i = 0;
  
  // do{
  //   // logic
  //   console.log(i);
  //   i++;
  // }
  // while(i < 10)
  // once i received i is 10 then I am going to stop.
  
  //=> while vs for
  
  const car = ["BMW", "Volvo", "Skoda", "Ford", "Mercedes"];
  let i = 0;
  
  for(let i = 0; i < car.length; i++){
    console.log(car[i])
    // BMW
    // Volvo
    // Skoda
    // ..
  }
  
  for(;car[i];){
    console.log(car[i]);
    i++;
  }
  
  while(car[i]){
    console.log(car[i]);
    i++;
  }
  
  //=> continue, break
  
  for (let i = 0; i < 10; i++) {
    // conditional statement
    if (i === 3) {
      // console.log(i); // 3
      break; // jumps out of a loop
    }
  }
  
  for (let i = 0; i < 10; i++) {
    // conditional statement
    if (i === 3) {
      continue; // breaks one iteration.
    }
    console.log(i);
  }
  
  let name = "kubilay";
  console.log(name.toUpperCase());
  console.log(name[0].toUpperCase() + name);
  
*/  