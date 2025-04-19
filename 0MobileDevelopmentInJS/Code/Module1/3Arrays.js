var train1 = ["wheat", "barley", "potato", "salt", "rock"]
console.log(train1[0])

function listArrayItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors); // display all items in the array at once

function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if (word[i] === match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")

var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']
fruits.pop();
console.log(fruits); // ['apple']

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}

arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']