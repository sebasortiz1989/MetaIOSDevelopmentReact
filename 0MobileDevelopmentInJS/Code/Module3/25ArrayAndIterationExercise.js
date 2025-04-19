// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (const item of dairy)
    {
        console.log(item);
    }
}

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan(bird)
{
    for( const key of Object.keys(bird) ) {
        console.log(`${key}: ${bird[key]}`)
    }
}

// Task 3
function animalCan(animal)
{
    for (const prop in animal)
    {
        console.log(`${prop}: ${animal[prop]}`)
    }
}

logDairy();

console.log("------")
birdCan(bird);

console.log("------")
animalCan(bird);