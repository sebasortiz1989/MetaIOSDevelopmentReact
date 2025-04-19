const {default: TestRunner} = require("jest-runner");
const addFive = require('./addFive');

test('addFive test', () => {
    expect(addFive(5)).toBe(10);
})

// Another example
// To install jest
// jest --version
// npm init -y
// npm install --save-dev jest

// Task 2: Update the test entry
// In the package.json file, locate the "scripts" entry, and inside of it, update the test entry to jest.

// // Task 1: Code the timesTwo function declaration
// function timesTwo(value) {
//     return value * 2;
// }
//
// // Task 2: Export the timesTwo function as a module
// module.exports = timesTwo;

// const timesTwo = require('./timesTwo');
//
// // Write the first test
// test('returns ...', () => {
//     expect(timesTwo(10)).toBe(20)
// });

/* * Comment 4 */