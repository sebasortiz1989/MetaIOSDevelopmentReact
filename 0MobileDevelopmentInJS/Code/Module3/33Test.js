class Game {
    constructor(points) {
        this.score = points;
    }
    getPoints() {
        return this.score;
    }
}

class Bonus extends Game {
    constructor() {
        super(2);
    }
    getpoints() {
        return super.getPoints() * 5;
    }
}

var result = new Bonus();
console.log(result.getPoints());

class Animal { }
class Cat extends Animal {
    constructor() { super(); this.noise = "meow"; }
    makeNoise() { return this.noise; }
}
class Tiger extends Cat {
    constructor() { super(); this.noise = "growl"; }
}
var result = new Tiger();
console.log(result.makeNoise());

function count(colors) { console.log(colors.length) }
count("Red", "Purple", null);