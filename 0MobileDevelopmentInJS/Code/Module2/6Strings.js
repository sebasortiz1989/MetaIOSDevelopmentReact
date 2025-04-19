var veggies = ["Onion", "Parsley", "Carrot"];
console.log(veggies.length);
console.log(veggies[0]);
console.log(veggies[1]);

console.log("----")

for (let i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}

var greeting = "Howdy";
console.log(greeting.length);
console.log(greeting[0]);
console.log(greeting[1]);

for (let i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}

var greet = "Hello";
var user = "Lisa";

// console.log(greet.pop()); // Error
console.log(greet + user);
console.log(greet.concat(user));

"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "

// Here's a list of all the methods covered in this cheat sheet:
//
// charAt()
//
// concat()
//
// indexOf()
//
// lastIndexOf()
//
// split()
//
// toUpperCase()
//
// toLowerCase()