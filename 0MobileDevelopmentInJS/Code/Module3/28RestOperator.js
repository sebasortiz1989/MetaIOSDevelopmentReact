// Is used to create a smaller box and pack items into it

const top7 = [
    "Coloseum",
    "Roman Forum",
    "Vatican",
    "Trevi",
    "Fountain",
    "Pantheon",
    "Restaurant"
]

const [] = top7;
const [first, second, third, ...secondVisit] = top7;

console.log(first);
console.log(second);
console.log(third);
console.log(...secondVisit);

function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate * item);
}

let shoppingCard = addTaxToPrices(1.3, 2, 3, 4, 5)
console.log(shoppingCard);

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6

// Concatenate
const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array

// Joining Objects
const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = {...flying, ...car};
console.log(flyingCar); // {wings: 2, wheels: 4}

// Add new memvers without using push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// Convert a string to an array using the spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); // ['H', 'e', 'l', 'l', 'o']

// Copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1};
car1.speed = 201;
console.log(car1.speed, car2.speed);

// You can copy an array into a completely separate array, also using the spread operator, like this:
const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2);