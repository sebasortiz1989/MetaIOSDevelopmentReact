class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log(`Car: ${this.color}, turbo is on! running at ${this.speed} Km/h`);
    }
}

const car = new Car('yellow', 100);
car.turboOn();

class Animal { /* ...class code here... */ }
var myDog = Object.create(Animal)
console.log (Animal)

var myDog2 = new Animal()
console.log (Animal)