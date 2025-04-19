let newVariable = 1;
console.log(newVariable);
newVariable = 2;
console.log(newVariable);

console.log("--------------------")
// var keyword, it's like in python

// we can access a var variable before initialization
// as long as the var variable is eventually initialized anywhere in our code
// console.log(user);

// we can declare and redeclare the same var variable without errors
// var user = "Mary";
// console.log(user);
// var user = "Johanna";
// console.log(user);

console.log("--------------------")

// let keyword, is just like a var in C#
// We cannot access a let variable before we declare it
// console.log(user); // Error!
// let user;

// We can declare an unassigned variable with let
// let user;
// console.log(user);

// we cannot redeclare a let variable
// let user = "Anna"

// but we can re assign it
// user = "Anna"
// console.log(user);

console.log("--------------------")

// const keyword, const of C#

// const variable must be initialized
// console.log(user); // Error!
// const user = "Andrew";

// we cannot access the const variable before initialization
// console.log(user); Error!!!
// const user = "Andrew";

// we cannot redeclare a const variable
// user = "Anna";

// It is advisable to user either let or const in modern JS