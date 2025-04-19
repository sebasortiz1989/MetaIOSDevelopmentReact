// From json to js object
const jsonSring = '{"greeting": "Hello"}';
const aPlainObj = JSON.parse(jsonSring);
aPlainObj.greeting = "Hi";
console.log(aPlainObj);

// From js object to JSON
const data = {
    firstName: "John",
    lastName: "Doe",
    greeting: "Hello",
}

const jsonString2 = JSON.stringify(data);
console.log(jsonString2);