// Using typeof

var test1 = typeof("What is this");
console.log(test1);

var test2 = typeof(10);
console.log(test2);

var test3 = typeof(3.14);
console.log(test3);

var test4 = typeof(true);
console.log(test4);

var test5 = typeof(false);
console.log(test5);

var test6 = typeof(1 < 2);
console.log(test6);

var test7 = typeof([1, 2, 3, 4, 5]);
console.log(test7);

var test8 = typeof({firstProperty : 1});
console.log(test8);

var test9 = typeof(function abc() {console.log("abc");});
console.log(test9);