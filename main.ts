// We using chalk in operator because we want to made a terminal beautifull.
import chalk from "chalk";

//Arthematic Operators

let x: number= 10;
let y: number= 5;

//Addition
let sum: number= x + y;
console.log(chalk.green("Sum:", sum));


//Subtraction
let sub: number= x - y;
console.log(chalk.green("Sub:", sub));


//Multiplication
let multiply: number= x * y;
console.log(chalk.yellow("Multiply:" , multiply));


//Devison
let divide: number= x / y;
console.log(chalk.yellow("Divide:" , divide));


//Increment
let increment: number= ++x;
console.log(chalk.red("Increment:" , increment));


//Decrement
let decrement: number= --y;
console.log(chalk.red("Decrement:" , decrement));


// Assignment Operator

let a: number = 8;
let b: number = 4;

a += b;
console.log(chalk.blue(a))

b += a;
console.log(chalk.grey(b));

b -= a;
console.log(chalk.cyan(b));

a -= b;
console.log(chalk.magenta(a));


// String Operators

let msg: string= "Hello ";
let perName: string= "Mohsin Iqbal"

let answers= (msg + perName);
console.log(chalk.red(answers));

// Logical Operators

let isBookAvailable: boolean= true;
let userBorrowedBook: number= 2;
const maxAllowedBooks: number= 3;

if (isBookAvailable && userBorrowedBook < maxAllowedBooks ){
    console.log(chalk.green("Ap book borrow kr sakty hain!"));
}else{
    console.log(chalk.red("Ap book borrow nahi sakty!"));
}

// Tinary Operators
//Condition or Conditions                       ?  Expression 1                            : Expression 2 

let userName: string= "Mohsin Iqbal";
let passWord: number= 12345;

userName == "Mohsin Iqbal" && passWord == 12345 ? console.log(chalk.green("You are sucessfully login")) : console.log(chalk.red("Invalid username or password"));

// Unary Operator

//Increment 
let count: number = 5

count ++

console.log(chalk.yellow("Count after increment:", count));

//Decrement

let remainingItem: number = 10

remainingItem --

console.log(chalk.blue("Remaining item after decrement:", remainingItem));

// Post increment variable

let c: number= 4

let postincrement = c++
console.log(chalk.magenta("Post Increment Value: ", postincrement));
console.log(chalk.cyan("Value after post increment: " , c));

// Pre Increment variable

let d: number = 7

let preIncrement= ++d
console.log(chalk.red("Pre increment value: " , preIncrement));
console.log(chalk.green("Value after pr increment: ", d));





























