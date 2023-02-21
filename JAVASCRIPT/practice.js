// * 1. CONSOLE LOG

console.log("JavaScript");
console.log(2011);
console.log("Woohoo! I love to code! #codecademy");
console.log(20.49);

console.log("Location of Codecademy headquarters: 575 Broadway, New York City");
console.log(40);
console.log("usama");
console.log("Again Usama");

// !=============================================
// !=============================================

// * 3. Arithmetic Operators

console.log(25 + 3.5);
console.log(2023 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);
console.log(2023 - 1969);
console.log(30288 + 30289);
console.log(25840 + 2690);
console.log(100 / 3);

// !=============================================
// !=============================================

// * 4. String Concatenation

console.log("Hello" + "World");
console.log("Hello " + "World");
console.log(8 + 2);
console.log("name " + "usama");
console.log("my " + "name " + "is " + "usama");
console.log("One" + ", " + "two" + ", " + "three!");
console.log("one, " + "two, " + "three!");
console.log("my" + " " + "name" + " " + "is" + " " + "usama");
console.log("Name" + " " + "Usama");

// !=============================================
// !=============================================

// * 5. Properties

console.log("Teaching the new world world how to code".length); // Prints 40 because the it has 40 characters
console.log("My name is usama".length); // Prints 16 because the it has 16 characters
console.log("I am living in karahi".length); // Prints 21 because the it has 21 characters
console.log("30289".length); // Prints 5 because the it has 5 characters
console.log("03201237617".length); // Prints 11 because the it has 11 characters
console.log("usama".length);

// !=============================================
// !=============================================

// * 6. Methods

// Use .toUpperCase() to log 'value' in all uppercase letters
console.log("Codecademy".toUpperCase());
console.log("name".toUpperCase());
console.log("my name is usama".toUpperCase());
console.log("i live in karachi".toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log("    Remove whitespace   ".trim());
console.log("     usama      ".trim());
console.log("my    name    is   usama".trim()); // show no output of trim because the whitespace is between values not around
console.log("     my name is usama     ".trim());

// !=============================================
// !=============================================

// * 7. Built-in Objects

console.log(Math.floor(Math.random(25) * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(true));

console.log(Math.floor(Math.random(25) * 100));

// !=============================================
// !=============================================

// * 8. Create a Variable: var

var favoriteFood = "pizza";
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

var name = "usama";
var city = "karachi";
console.log(name + " " + city);

// !=============================================
// !=============================================

// * 9. Create a Variable: let

let changeMe = true;
changeMe = false;
console.log(changeMe);

let myName = "usama";
myName = "alpha";
console.log(myName);

// when using let (and even var) is that we can declare a variable without assigning the variable a value.

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

// !=============================================
// !=============================================

// * 10. Create a Variable: const
