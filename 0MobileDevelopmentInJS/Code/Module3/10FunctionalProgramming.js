var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo);
console.log('Hello');

function consoleLog(val) {
    console.log(val)
    return val
}

consoleLog('Hello')

function doubleIt(num) {
    return num * 2
}

// Now I'll code another function that builds an object with a specific value:
function objectMaker(val) {
    return {
        prop: val
    }
}

consoleLog(objectMaker( doubleIt(100) ));