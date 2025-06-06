var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers:true,
}

var eagle1 = Object.create(bird);
console.log("eagle1: ", eagle1);
console.log("eagle1 has wings: ", eagle1.hasWings);
console.log("eagle1 can fly: ", eagle1.canFly);
console.log("eagle1 has feathers: ", eagle1.hasFeathers);

var eagle2 = Object.create(bird);
console.log("eagle2: ", eagle2);
console.log("eagle2 has wings: ", eagle2.hasWings);
console.log("eagle2 can fly: ", eagle2.canFly);
console.log("eagle2 has feathers: ", eagle2.hasFeathers);

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("penguin1 can fly: ", penguin1);