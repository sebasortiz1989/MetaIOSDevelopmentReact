var storeManager = {};
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.specialAbility = "Finding business opportunities";
storeManager.greeting = "Let's make some money";

console.log(storeManager.specialAbility);

var assistantManager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
}

console.log(assistantManager);

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

// However, doing this is discouraged, due to obvious reasons of having a property key as a number string not really
// conveying a lot of useful information.
car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 4}

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}