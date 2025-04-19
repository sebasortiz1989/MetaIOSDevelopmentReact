// Foreach
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

// Filter
const nums = [0,10,20,30,40,50];
let result = nums.filter( function(num) {
    return num > 20;
})

console.log(result);

// Map
var mapExample = [0,10,20,30,40,50].map( function(num) {
    return num / 10
});

console.log(mapExample);

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);