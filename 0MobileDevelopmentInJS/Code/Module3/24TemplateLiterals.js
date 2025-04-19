let greet = "Hello";
let place = "World";
console.log(`${greet} nice ${place}!`) //display

var greet2 = "Hello";
var place2 = "World";
console.log(greet2 + " nice " + place2 + "!"); //display both variables without using template literals// both variables using template literals

let multiLine = `
I can write in multiple lines
such as ${1 + 1 + 1} lines
nice!
`;

console.log(multiLine);