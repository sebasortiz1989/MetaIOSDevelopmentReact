let {PI} = Math;
console.log(PI);

let {pi} = Math;
console.log(pi);

console.log(PI === Math.PI);
PI = 1;
console.log(PI === Math.PI);

// Objects are not iterable
// const car = {
//     speed: 100,
//     color: "blue"
// }
//
// for(prop of car) {
//     console.log(prop)
// }

const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
        dynamicKey = "speed";
    }else{
        dynamicKey = "color";
    }

    var drone = {
        speed: 15,
        color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();

// Prop in and prop of
const car = {
    engine: true
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

for (prop in sportsCar) {
    console.log("Property: ", prop);
}

console.log("-------")
for (prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop]);
}