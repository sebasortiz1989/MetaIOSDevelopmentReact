<div align="center">
  <h1>Mobile Development and JavaScript</h1>
</div>

<div align="center"> 
  <img src="images/logo.PNG" width="150">
</div>

# Introduction

## Course Syllabus

**Module 1: Introduction to JavaScript**

In this module, you are introduced to JavaScript. You'll learn why JavaScript is so integral to software development. And you'll get an overview of how to write JavaScript code inside the browser. Furthermore, you will learn about the most common operators as well as conditional statements and loops.

After completing this module, you will be able to:

- Explain the importance of JavaScript in software development
- Demonstrate how to write JavaScript code inside the browser
- Demonstrate how to write basic JavaScript code
- List common operators, conditional statements and loops
- Demonstrate how to use variables and output their value in the console

**Module 2: The building blocks of a program**

Here you'll learn how to use objects, arrays and functions. In addition, you will learn about the most common built-in methods, and the difference between undefined, null and empty strings. And you'll explore both error handling and defensive programming.

After completing this module, you will be able to:

- Build and use objects, arrays, and functions
- List some common built-in methods on built-in objects
- Describe handling bugs and errors using try, catch, throw, and defensive programming
- Explain the difference between undefined, null, and empty strings  
- Demonstrate how to write basic code using arrays, objects and functions   

**Module 3: Programming paradigms**

This module is about functional programming and the object oriented programming paradigm. You will learn what scope is in JavaScript. You'll explore the differences between var, let and const. And you'll learn how to use classes and inheritance in object oriented programming. Additionally, you'll explore how to use write JavaScript using modern features like spread and rest.  You will build code that can manipulate the DOM and handle events. And you will use JSON in JavaScript.

After completing this module, you will be able to:

- Outline the tenets of the functional programming and object oriented programming paradigm
- Describe how scope works in JavaScript
- List the differences between var, let, and const
- Use classes and inheritance in OOP in JavaScript
- Write JavaScript code using more modern features like spread, rest, template strings and modules
- Build code that manipulates the DOM and handles events
- Use JSON in JavaScript          

**Module 4: Testing and compatibility**

Here you will learn about Node.js and npm. And you will explore how to install npm packages and how to work with package.json. Furthermore, you will learn about testing in JavaScript and you'll code a simple unit test in Jest.

After completing this module, you will be able to:

- Describe Node.js and npm
- Explain how to install npm packages
- Describe how to work with package.json
- Explain the process of testing in JavaScript
- List the three most prevalent kinds of testing
- Demonstrate how to code a simple unit test in Jest    

**Module 5: Graded assessment**

In the final module, you'll learn about the graded assessment. After you complete the individual units in this module, you'll synthesize the skills you gained from the course to create code for the "Little lemon receipt maker ". 

You'll also have to opportunity to reflect on the course content and the learning path that lies ahead.

By the end of this course you will be able to:

- Explain the basic concepts of web development with JavaScript. 
- Practice using functions, objects, arrays, variables, data types, the HTML DOM, and much more. 
- Use JavaScript within the React framework 
- Practice testing code and how to write a unit test using Jest

## Data Types (Primitive Types)

- String
- Number
- Boolean
- Null: Absence of a value
- Undefined: A variable not yet assigned a value
- BigInt
- Symbol: A data type used as an unique identifier

## Math Object cheat sheet

JavaScript has useful built-in objects. One of these popular built-in objects is the Math object.

By the end of this reading, you'll be able to:

- Outline the built-in properties and methods of the Math object

**Number constants**

Here are some of the built-in number constants that exist on the Math object: 

- The PI number: Math.PI which is approximately 3.14159
- Euler's number: Math.E which is approximately 2.718
- The natural logarithm of 2: Math.LN2 which is approximately 0.693

**Rounding methods**

These include: 

- Math.ceil() - rounds up to the closest integer 
- Math.floor() - rounds down to the closest integer 
- Math.round() - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 
- Math.trunc() - trims the decimal, leaving only the integer

**Arithmetic and calculus methods**

Here is a non-conclusive list of some common arithmetic and calculus methods that exist on the Math object: 

- Math.pow(2,3) - calculates the number 2 to the power of 3, the result is 8 
- Math.sqrt(16) - calculates the square root of 16, the result is 4 
- Math.cbrt(8) - finds the cube root of 8, the result is 2 
- Math.abs(-10) - returns the absolute value, the result is 10 
- Logarithmic methods: Math.log(), Math.log2(), Math.log10() 
- Return the minimum and maximum values of all the inputs: Math.min(9,8,7) returns 7, Math.max(9,8,7) returns 9.
- Trigonometric methods: Math.sin(), Math.cos(), Math.tan(), etc.

**Logarithmic Methods**
- Math.log(x) - Returns the natural logarithm (base e) of x.
- Math.log2(x) - Returns the base-2 logarithm of x.
- Math.log10(x) - Returns the base-10 logarithm of x.

**Logarithmic Methods**
- Math.log(x) - Returns the natural logarithm (base e) of x.
- Math.log2(x) - Returns the base-2 logarithm of x.
- Math.log10(x) - Returns the base-10 logarithm of x.

- Math.random(), Generate a decimal number between 0 and 0.99

```js
var MyNum = Math.sqrt(16); // Calculates square root of 16
console.log(MyNum); // Output: 4
```

## Error Handling

1. Syntax Error:
A syntax error occurs when the code violates the rules of the JavaScript language structure. It happens when the JavaScript engine cannot parse the code due to incorrect syntax.

Examples:

- Missing parentheses, brackets, or curly braces
- Incorrect use of keywords
- Missing semicolons (in some cases)

```js
if (x === 5 {
  console.log("x is 5");
}
```

2. Type Error:
A type error occurs when an operation is performed on a value of an inappropriate type. It happens when you try to use or access properties or methods that don't exist for a particular data type.

Examples:

- Calling a non-function as if it were a function
- Attempting to access properties of null or undefined
- Performing operations on incompatible types

```js
let x = 5;
x();  // Attempting to call a number as if it were a function
```

3. Reference Error:
A reference error occurs when you try to use a variable or function that hasn't been declared or is out of scope.

Examples:

- Using a variable before it's declared
- Accessing a variable that doesn't exist
- Using a function before it's defined (in some cases)

```js
console.log(y);  // Trying to use 'y' before it's declared
let y = 10;
```

## Syntax, logical and runtime errors

By the end of this reading, you'll be able to:

- Recognize common types of errors in JavaScript

Here are some of the most common errors in JavaScript: 

- ReferenceError 
- SyntaxError 
- TypeError 
- RangeError

There are some other errors in JavaScript. These other errors include: 

- AggregateError 
- Error 
- InternalError 
- URIError

In this reading, I'll focus on Reference, Syntax, Type, Range, and Logical errors.

### ReferenceError

A ReferenceError gets thrown when, for example, one tries to use variables that haven't been declared anywhere.

An example can be, say, attempting to console log a variable that doesn't exist:

```js
console.log(username);
```

If the variable named username hasn't been declared, the above line of code will result in the following output:

```js
Uncaught ReferenceError: username is not defined
```

### SyntaxError

Any kind of invalid JavaScript code will cause a SyntaxError.

For example:

```js
var a "there's no assignment operator here";
```

The above line of code will throw the following error:

```js
Uncaught SyntaxError: Unexpected string
```

There's an interesting caveat regarding the SyntaxError in JavaScript: it cannot be caught using the try-catch block.  

### TypeError

A TypeError occurs when a method is used on an incompatible data type.

A simple example is attempting to run the pop() method on a string:

```js
"hello".pop() // Uncaught TypeError: "hello".pop is not a function
```

Strings, though array-like, do not support array methods such as pop(). This array-like behavior of strings was discussed in an earlier lesson in this course. However, strings lack many of the array methods, and attempting to use such methods on a string will result in a TypeError.

### RangeError

A RangeError is thrown when we're giving a value to a function, but that value is out of the allowed range of acceptable input values.

Here's a simple example of converting an everyday Base 10 number (common decimal system) to a Base 2 number (binary number).

For example:

```js
(10).toString(2);
// Converts the number 10 into its binary representation: '1010'
```

The value of 2 when passed to the toString() method, is like saying to JavaScript: convert the value of 10 of the Base 10 number system, to its counterpart in the Base 2 number system.

JavaScript obliges and translates the regular number 10 to its binary counterpart.

Besides using Base 2 number system, I can also use the Base 8, like this:

```js
(10).toString(8); // 12
```

I get back the value 12, which is the plain number 10, written in Base 8 number system.

However, if I try to use a non-existing number system, such as an imaginary Base 100, since this number system effectively doesn't exist in JavaScript, I will get the RangeError, because a non-existing Base 100 system is out of range of the number systems that are available to the toString() method:

```js
(10).toString(100); 
// Uncaught RangeError: toString() radix argument must be between 2 and 36
```

### Logical Errors

Logical errors cause incorrect behavior in programs despite the absence of syntax or runtime errors.

```js
function addNumbers(a, b) {
  return a - b; // Logical error
}
console.log(addNumbers(5, 3));  
// Output: 2 (Incorrect, expected: 8)
```

As a beginner, there are several logical errors that you may encounter and there are a few steps you can integrate in your practice over time such as:

- Debug Using Breakpoints: Inspect variable values step-by-step. Breakpoints are a common feature available in most modern IDEs such as VS Code.

- Review Logic: Walk through the code to confirm it meets the intended functionality.

- Peer Review: Another perspective can reveal hidden issues.

### Error Object Properties

JavaScript errors are essentially objects with useful properties that are accessible. These include:

1. name: The type of error (e.g., TypeError, RangeError)
2. message: A description of the error
3. stack: A stack trace showing where the error occurred

Let us look at an example:

```js
try {
  let a = b; // ReferenceError
} catch (error) {
  console.log(error.name);    // ReferenceError
  console.log(error.message); // b is not defined
  console.log(error.stack);   // Stack trace
}
```

### Best Practices for Handling Errors

1. Use Try-Catch Blocks: To handle predictable runtime errors gracefully
2. Validate Inputs: Helps prevent invalid operations by checking inputs
3. Use Specific Error Types: Throw custom errors where necessary, for clarity

While these concepts will be familiar after regular practice, here is an example for demonstration of these best practices:

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  console.log(divide(5, 0));
} catch (error) {
  console.error(error.message); // Division by zero is not allowed.
}
```

### Distinguishing factors between Error Types
Finally let us look at the distinguishing factors for Syntax, Logical, and Runtime Errors:

- Syntax Errors: Prevent code execution due to invalid syntax
- Logical Errors: Allow execution but cause incorrect output
- Runtime Errors: Occur during execution and halt the program unless handled

With this reading, you’ve learned about common JavaScript errors, how to identify them, and best practices for handling them effectively

# Functional Programming

## First-class functions
It is often said that functions in JavaScript are “first-class citizens”. What does that mean?

It means that a function in JavaScript is just another value that we can:

- pass to other functions
- save in a variable
- return from other functions

## Higher-order functions

A higher-order function is a function that has either one or both of the following characteristics:

- It accepts other functions as arguments
- It returns functions when invoked, treating them as values

## Pure functions

A pure function returns the exact same result as long as it's given the same values.

## Object Oriented Programming principles

### OOP Principles: Inheritance

Inheritance is one of the foundations of object-oriented programming.

In essence, it's a very simple concept. It works like this: 

There is a base class of a "thing".

There are one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")

There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.

Note that each sub-class inherits from its super-class. In turn, a sub-class might also be a super-class, if there are classes inheriting from that sub-class.

Here's a practical example:

1. There is a base class of Animal.
2. There is another class, a sub-class inheriting from Animal, and the name of this class is Mammal.
3. Next, there is another class, inheriting from Mammal, and this class is Elephant.

Thus, in the above example, I'm modeling objects from the real world by constructing relationships between Animal, Mammal, and Elephant. Each of them is a separate class, a blueprint for specific object instances that can be constructed as needed.

To set up the inheritance relation between classes in JavaScript, I can use the extends keyword, as in: 

class B extends A.

Here's an example of an inheritance hierarchy in JavaScript:

```js
class Animal { /* ...class code here... */ };
class Mammal extends Animal { /* ...class code here... */ };
class Elephant extends Mammal { /* ...class code here... */ };
```

### OOP Principles: Encapsulation
In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.

For example, when I run the following code:

```js
"abc".toUpperCase();
```

I don't really need to worry or even waste time thinking about how the toUpperCase() method works. All I want is to use it, since I know it's available to me. Even if the underlying syntax - that is, the implementation of the toUpperCase() method changes - as long as it doesn't break my code, I don't have to worry about what it does in the background, or even how it does it.

### OOP Principles: Abstraction
Abstraction is all about writing code in a way that will make it more generalized.

The concepts of encapsulation and abstraction are often misunderstood because their differences can feel blurry.

It helps to think of it in the following terms: 

Abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 

Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.

While both the encapsulation and abstraction are important concepts in OOP, it requires more experience with programming in general to fully grasp these topics.

For now, it's enough to be aware of their existence in OOP.

### OOP Principles: Polymorphism
Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be "something that can take on many shapes."

So, to understand what polymorphism is about, let's consider some real-life objects.

A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.

Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.

The above concepts can be coded in JavaScript as follows:

```js
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!";
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!";
    }
}
```

You can access the bell() method on each object like this:

```js
bicycle.bell(); // "Ring, ring! Watch out, please!"
door.bell();    // "Ring, ring! Come here, please!"
```

At this point, one can conclude that the exact same name of the method can have the exact opposite intent, based on what object it is used for.

Now, to make this code truly polymorphic, I will add another function declaration:

```js
function ringTheBell(thing) {
    console.log(thing.bell());
}
```

Now I have declared a ringTheBell() function. It accepts a thing parameter - which I expect to be an object, namely, either the bicycle object or the door object.

Now, you can invoke ringTheBell() with either object:

```js
ringTheBell(bicycle); // Ring, ring! Watch out, please!

ringTheBell(door); // "Ring, ring! Come here, please!"
```

You've now seen an example of the exact same function producing different results, based on the context in which it is used. Polymorphism is useful because it allows developers to build objects that can share functionality but override it as needed.

Another example of polymorphism is the concatenation operator, used by calling the built-in concat() method.

If I use the concat() method on two strings, it behaves exactly the same as if I used the + operator. 

```js
"abc".concat("def"); // 'abcdef'
```

I can also use the concat() method on two arrays. Here's the result: 

```js
["abc"].concat(["def"]); // ['abc', 'def']
```

Consider using the + operator on two arrays with one member each: 

```js
["abc"] + ["def"]; // "abc,def"
```

This means that the concat() method is exhibiting polymorphic behavior since it behaves differently based on the context - in this case, based on what data types I give it. However, take a note that using the + operator with arrays does not perform true concatenation. Instead, it coerces the arrays into strings before joining them and elements are separated by commas.

This behavior is different from the concat() method, which preserves the array structure.

To reiterate, polymorphism is useful because it allows developers to build objects that can have the exact same functionality, or functions with the exact same name which behave exactly the same. However, at the same time, you can override some parts of the shared functionality or even the complete functionality, in some other parts of the OOP structure.

Here's an example of polymorphism using classes in JavaScript:

```js
class Bird {
    useWings() {
        console.log("Flying!");
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings();
        console.log("Barely flapping!");
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!");
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
```

The super keyword calls methods from the parent class. In the Eagle class, super.useWings() invokes the useWings() method from the Bird class, allowing the Eagle class to extend its behavior by adding "Barely flapping!" after calling the parent method.

The Penguin and Eagle sub-classes both inherit from the Bird super-class. 

The Eagle sub-class inherits the useWings() method from the Bird class, but extends it with an additional console log. The Penguin sub-class doesn't inherit the useWings() method - instead, it has its own implementation, although the Penguin class itself does extend the Bird class. 

## Constructors

In this section, you will learn:

What constructors are and how they work in JavaScript.

How to use built-in constructors like Date and Math.

How to define and use custom constructor functions.

When to use object literals instead of constructors for better performance.

By the end, you’ll understand the key concepts of constructors and how to apply them effectively.

JavaScript has a number of built-in object types, such as:

 Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, and many more.

These objects are commonly known as "native objects."

Using Constructor Functions
Constructor functions, commonly referred to as just "constructors", are special functions that allow us to build instances of these built-in native objects. All the constructor functions are capitalized.

To use a constructor function, I must prepend it with the operator new.

For example, to create a new instance of the Date object, I can run: new Date(). What I get back is the current date and time, such as:

Thu Feb 03 2022 11:24:08 GMT+0100 (Central European Standard Time) 

However, not all the built-in objects come with a constructor function. An example of such an object type is the built-in Math object.

Objects Without Constructors
Running new Math() throws an Uncaught TypeError, informing us that Math is not a constructor.

Thus, I can conclude that some built-in objects do not have constructors, when they serve a particular purpose: to allow us to instantiate a specific instance of a given object's constructor. The built-in Date object is perfectly suited for having a constructor because each new date object instance I build should have unique data by definition, since it's going to be a different timestamp - it's going to be built at a different moment in time.

Other built-in objects that don't have constructors, such as the Math object, don't need a constructor. They're just static objects whose properties and methods can be accessed directly, from the built-in object itself. In other words, there is no point in building an instance of the built-in Math object to be able to use its functionality.

For example, if I want to use the pow method of the Math object to calculate exponential values, there's no need to build an instance of the Math object to do so. To illustrate, to get the number 2 to the power of 5, I'd run:

Math.pow(2,5); // --> 32

There's no need to build an instance of the Math object since nothing needs to be stored in that specific object's instance.

Besides constructor functions for the built-in objects, I can also define custom constructor functions.

Custom Constructor Functions
Let us first look at an example:

```js
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}
```

Now I can make as many ice creams as I want:

```js
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}
```

I've just built two instance objects of Icecream type.

The most common use case of new is to use it with one of the built-in object types.

**Performance and Best Practices with Constructors**

Note that using constructor functions on all built-in objects is sometimes not the best approach.

This is especially true for object constructors of primitive types, namely: String, Number, and Boolean.

For example, using the built-in String constructor, I can build new strings:

```js
let apple = new String("apple");
apple; // --> String {"apple"}
```

The apple variable is an object of type String.

Let's see how the apple object differs from the following pear variable:

```js
let pear = "pear";
pear; // --> "pear"
```

The pear variable is a string literal, that is, a primitive JavaScript value.

The pear variable, being a primitive value, will always be more performant than the apple variable, which is an object.

Besides being more performant, due to the fact that each object in JavaScript is unique, you can't compare a String object with another String object, even when their values are identical.

In other words, if you compare new String('plum') === new String('plum'), you'll get back false, while "plum" === "plum" returns true. You're getting the false when comparing objects because it is not the values that you pass to the constructor that are being compared, but rather the memory location where objects are saved.

Besides not using constructors to build object versions of primitives, you are better off not using constructors when constructing plain, regular objects.

Alternative Patterns and Literals
Instead of new Object, you should stick to the object literal syntax: {}.

A RegExp object is another built-in object in JavaScript. It's used to pattern-match strings using what's known as "Regular Expressions". Regular Expressions exist in many languages, not just JavaScript.

In JavaScript, you can build an instance of the RegExp constructor using new RegExp(). 

Alternatively, you can use a pattern literal instead of RegExp. Here's an example of using /d/ as a pattern literal, passed-in as an argument to the match method on a string.

```js
"abcd".match(/d/); // ['d', index: 3, input: 'abcd', groups: undefined]
"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]
```

Instead of using Array, Function, and RegExp constructors, you should use their array literal, function literal, and pattern literal varieties: [], () {}, and /()/.

However, when building objects of other built-in types, we can use the constructor.

Here are a few examples:

```js
new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();
```

The above list is not exhaustive, but it's just there to give you an idea of some constructor functions you can surely use.

Note that there are links provided about RegExp and regular expression in the lesson item titled "Additional Reading".

Understanding constructors in JavaScript is crucial for building efficient and flexible code. By mastering both built-in and custom constructors, you'll be able to create dynamic objects tailored to your needs, improve performance, and follow best practices. This knowledge will enhance your ability to write clean, maintainable code, making you a more proficient JavaScript developer.

# Module 3

## For of loops

when you run on objects in JavaScript for in loops, iterate over the properties of the object and its prototype. While for of loops do this only for the objects' properties.

## Iterating over object properties and values

**Introduction**

You already know how to use for loop to create loops in JavaScript. But iterating through object properties can be tricky in JavaScript, and in this reading, you are going to learn everything about this. 

**Iterating the Object keys using for loop**

To iterate through the keys of an object using a for loop, you can use the Object.keys() method to get an array of the object's keys, and then use the for loop to iterate over the array. Let’s have a look at the following example.

```js
const obj = {a: 1, b: 2, c: 3};
const keys = Object.keys(obj);
 
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}
```

The Object.keys method returns an array of the object keys passed to this function. In the example above, it returns [a,b,c] since there are only three keys or properties in the obj object. 

**Iterating Object keys using for...in loop**

Here is an easier way to iterate over the keys of an object without using the Object.keys() method. To do so, you need to use the for...in loop. Here is the for...in version of the same code you just wrote above. 

```js
const obj = {a: 1, b: 2, c: 3};
 
for (const prop in obj) {
  console.log(prop + ": " + obj[prop]);
}
```

In this example, in each loop the value of the prop will be each key of the object.  In the first iteration, the value of the prop will be a, then b and then c in the final iteration. Since these are the keys of the object, you can get the corresponding value in this way – obj[prop]

**Iterating over Object values using for...of loop**

The for...of loop is a new type of loop introduced in ECMAScript 2015 (also known as ES6) that allows you to iterate over the values in an iterable object, such as an array. 

To iterate through the values of an object using for...of loop, you need to write code like this:

```js
const obj = {a: 1, b: 2, c: 3};
for (const value of Object.values(obj)) { 
  console.log(value); 
}
```

**Benefits of using for...in and for...of loop**

In modern JavaScript both for...in and for...of loops are useful to write clean code. 

Here are a few benefits of using the for...in loop:

It allows you to easily access the properties of an object.

It can be used to loop through objects with unknown property names.

It can be used to modify the values of object properties.

Here are some benefits of using the for...of loop:

It allows you to easily iterate over the values of an iterable object, such as an array.

It provides a concise and readable syntax for iteration.

It can be used to perform operations on the values of an iterable object.

**Conclusion**

In this reading, you have learned how to use Object.keys() and Object.values() function. You also learned how to iterate over the object properties and values using for...in and for...of loops. 

## Data Structures Examples

**The forEach() method**

Arrays in JavaScript come with a handy method that allows you to loop over each of their members. 

Here's the basic syntax:

```js
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
```

To explain the syntax, the forEach() method accepts a function that will work on each array item. That function's first parameter is the current array item itself, and the second (optional) parameter is the index.

Very often, the function that the forEach() method needs to use is passed in directly into the method call, like this:

```js
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});
```

This makes for more compact code, but perhaps somewhat harder to read. To increase readability, sometimes arrow functions are used. You can find out more about arrow functions in the 
additional reading
.

**The filter() method**

Another very useful method on the array is the filter() method. It filters your arrays based on a specific test. Those array items that pass the test are returned.

Here's an example:

```js
// Filter
const nums = [0,10,20,30,40,50];
let result = nums.filter( function(num) {
    return num > 20;
})

console.log(result);
```

Here num simply represents the parameter for individual array elements being checked by the callback function.

Similar to the forEach() method, the filter() method also accepts a function and that function performs some work on each of the items in the array.

**The map method**

Finally, there's a very useful map method. 

This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 

For example:

```js
var mapExample = [0,10,20,30,40,50].map( function(num) {
    return num / 10
})
```

As already discussed, choosing a proper data structure affects the very code that you can write. This is because the data structure itself comes with some built-in functionality that makes it easier to perform certain tasks or makes it harder or even impossible without converting your code to a proper data structure.

Now that you've covered the methods, let's explore how to work with different built-in data structures in JavaScript.

**Working with Objects in JavaScript**

A lot of the information on how to work with objects in JavaScript has already been covered in this course.

The example below demonstrates how to use the object data structure to complete a specific task. This task is to convert an object to an array:

```js
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)
```

Although this is possible and works, having to do something like this might mean that you haven't chosen the correct data structure to work with in your code.

On the flip side, sometimes you don't get to pick the data structure you're working with. Perhaps that data comes in from a third-party data provider and all you can do is code your program so that it consumes it. You'll learn more about the interchange of data on the web when you learn about JSON (JavaScript Object Notation).

**Working with Maps in JavaScript**

To make a new Map, you can use the Map constructor:

```js
new Map();
```

A map can feel very similar to an object in JS.

However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.

For example:

```js
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
```

To get a specific value, you need to use the get() method. For example:  

```js
bestBoxers.get(1); // 'The Champion'
```

**Working with Sets in JavaScript**

A set is a collection of unique values.

To build a new set, you can use the Set constructor:

```js
new Set();
```

The Set constructor can, for example, accept an array.

This means that we can use it to quickly filter an array for unique members.

```js
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
```

**Other data structures in JavaScript**

Besides the built-in data structures in JavaScript, it's possible to build non-native, custom data structures. These data structures come built-in natively in some other programming languages. 

Some more advanced data structures that have not been covered include: 

Queues 

Linked lists (singly-linked and doubly-linked) 

Trees 

Graphs  

For resources on building these data structures, please refer to the additional resources reading at the end of this lesson.

**Conclusion**

JavaScript offers essential data structures like Objects, Arrays, Maps, and Sets, each serving different purposes. By mastering methods like forEach, filter, and map, you can efficiently manage and manipulate data. While advanced structures like Queues and Linked Lists exist, this reading focused on the basics to provide a strong foundation for your coding journey.

## Differences between spread and rest operators

**Spread Operator**
- Expands arrays, objects, or strings into individual elements or properties.
- Used for concatenation, copying, or passing arguments.

**Rest Operator**
- Gathers multiple elements into a single array or object.
- Used in destructuring or collecting function arguments.

# JavaScript in the browser

## DOM manipulation (Document object model)

```js
const h2 = document.createElement('h2')
undefined

h2.innerText = "This is an h2 heading"
'This is an h2 heading'

h2.setAttribute('id', 'sub-heading')
undefined

h2.setAttribute('class', 'secondary')
undefined

h2
<h2 id=​"sub-heading" class=​"secondary">​This is an h2 heading​</h2>
​
document.body.append(h2)
```

## JavaScript interactivity
The purpose of this reading is to introduce you to a simple explanation of web page manipulation and some examples of it.

Did you know that JavaScript's initial purpose was to provide interactivity in the browser?

In other words, it was the "set of controls" that would allow web developers to control the behavior of the webpages and even the browsers that these webpages worked on.

This is still the case today.

As the web ecosystem developed and the world became ever more digitized, so did the myriad of ways that one can use JavaScript as a web developer to manipulate websites.

Initially, in the late 1990s, there was plain JavaScript that had to be tweaked to suit individual browsers.

Then, by the mid-2000s, the jQuery library came out, with the idea of writing less code, but doing more with it. It "leveled the playing field" as it allowed developers to use a single code-base for various browsers.

This trend continued and many other frameworks such as React, Vue, Angular, D3, and more came along.

Together with npm and Node.js, the JavaScript ecosystem is not slowing down.

Even though it has gone a long way, sometimes it's good to go back to basics. JavaScript is still the king when it comes to making our websites interactive.

Although CSS has developed significantly over the years, it is still JavaScript that allows users to: 

- Get their geolocation,
- Interact with maps,
- Play games in the browser, 
- Handle all kinds of user-triggered events, regardless of the device,
- Verify form input before sending it to the backend of a webapp,
- and more!

There are many, many ways in which JavaScript allows you to build rich, interactive experiences on the web.

## JavaScript Selectors

```js
document.querySelector('p')
<p>​"This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission."</p>​

document.querySelector('a')
<a href=​"https:​/​/​www.iana.org/​domains/​example">​More information...​</a>​
document.querySelectorAll('p')
NodeList(2) [p, p]0: p1: plength: 2[[Prototype]]: NodeList

document.getElementById('heading')
null

document.getElementsByClassName('txt')
HTMLCollection []length: 0[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object

```

# Testing

e2e testing: Testing the website or the applciation the way a user would test it. Slow and time consuming. Software: Webdriver JS, Protractor and Cypress.

integration system: testing how parts of your system interacts with other parts of your system. Software: React testing library and Enzyme. faster and cheaper

unit testing: process the smallest piece of code that you can test separately from the rest of the app. fastest and cheapest. Methods and functions, they are self contained, in isolation from the rest of the app.

## Jest

Testing framework from JS. Is used to test code like react. It is maintained by meta.

Jest allows you to test Babel, TypeScript, Node, Angular and Vuew as well.

Code coverage is the percentage of code that is being tested. The higher the code coverage the lower the chance of having bugs.

## Mocking

Separating code from related dependencies durin testing.

Mocking data is example of data.

Jest has mocking functions.

## Using Jest

To install jest
jest --version
npm init -y
npm install --save-dev jest

replace in the package.json
{
    "name": "code",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": "",
    "devDependencies": {
    "jest": "^29.7.0"
}
}

"test": "jest"

I run npm run test

