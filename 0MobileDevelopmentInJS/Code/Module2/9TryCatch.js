try {
    console.log('TryCatch started');
    console.log(a + b);
    console.log("Hello World")
    throw new Error("Test error") // This throws the error manually
} catch(err) {
    // do something here
    console.error(err)
}

// This return null
var letters = "abc";
console.log(letters.match(/z/));

// Returns undefined
var noise;
console.log(noise)

// Empty strings
var name1 = "";

function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")

function letterFinder(word, match) {
    let condition1 = typeof (word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    let condition2 = typeof (match) == 'string' && match.length === 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] === match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")

function add(a, b){
    console.log(a + b)
}
add(3, "4");

try {
    Number(5).toPrecision(300)
} catch(e) {
    console.log("There was an error")
}

// (10).toString(100);

console.log(!null);

var burger = ["bun", "beef", "lettuce", "tomato sauce", "onion", "bun"];
burger.pop();
console.log(burger)

// console.log((10).toString(100));

try {
    Number(5).toPrecision(300);
} catch(e) {
    console.log("There was an error");
}