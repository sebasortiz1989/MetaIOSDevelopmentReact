function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!

//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

// ---------------------------------
// First class functions
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}

function specificNum() {
    return 42
}

var useRandom = true;
var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())

// HiguerOrder
function addTwoNums2(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

addTwoNums2(specificNum, specificNum); // returned number is 84
addTwoNums2(specificNum, randomNum); // returned number is 42 + some random number