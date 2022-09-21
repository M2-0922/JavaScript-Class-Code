//=> JavaScript if, else, and else if

/*

Conditional statements are used to perform different actions based on different conditions.

Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed

*/

//=> The if Statement

/*
Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

if (condition) {
  //  block of code to be executed if the condition is true
}

if (hour < 18) {
  greeting = "Good day";
}

*** Note that if is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.

*/

//=> The else Statement

/*
Use the else statement to specify a block of code to be executed if the condition is false.

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

*/

//=> The else if Statement

/*
Use the else if statement to specify a new condition if the first condition is false.

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
*/

//=> The JavaScript Switch Statement

/*
Use the switch statement to select one of many code blocks to be executed.

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

This is how it works:

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.

The default keyword specifies the code to run if there is no case match:
When JavaScript reaches a break keyword, it breaks out of the switch block.


switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

Switching Details

If multiple cases matches a case value, the first case is selected.

If no matching cases are found, the program continues to the default label.

If no default label is found, the program continues to the statement(s) after the switch.

*/
