// ? ================ JAVASCRIPT ==============

// ! TABLE OF CONTENTS

// * 1. CONSOLE LOG
// * 2. COMMENTS
// * 3. Arithmetic Operators
// * 4. String Concatenation
// * 5. Properties
// * 6. Methods
// * 7. Built-in Objects
// * 8. Create a Variable: var
// * 9. Create a Variable: let
// * 10. Create a Variable: const
// * 11. Mathematical Assignment Operators
// * 12. The Increment and Decrement Operator
// * 13. String Concatenation with Variables
// * 14. String Interpolation
// * 15. typeof operator
// * 16. PROJECT: Kelvin Weather
// * 17. PROJECT: Dog Years
// * 18. If Statement
// * 19. If...Else Statements
// * 20. Comparison Operators
// * 21. Logical Operators
// * 22. Truthy and Falsy
// * 23. Truthy and Falsy Assignment
// * 24. Ternary Operator
// * 25. Else If Statements
// * 26. The switch keyword
// * 27. PROJECT: Magic Eight Ball
// * 28. PROJECT: Race Day
// * 29. What are Functions?
// * 30. Function Declarations
// * 31. Calling a Function
// * 32. Parameters and Arguments
// * 33. Default Parameters
// * 34. Return
// * 35. Helper Functions
// * 36. Function Expressions
// * 37. Arrow Functions
// * 38. Concise Body Arrow Functions
// * 39. PROJECT: Rock, Paper, or Scissors
// * 40. PROJECT: Sleep Debt Calculator
// * 41. Blocks and Scope
// * 42. Global Scope
// * 43. Block Scope
// * 44. Scope Pollution
// * 45. Practice Good Scoping
// * 46. PROJECT: Training Days
// * 47. Introduction: CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
// * 48. canIVote(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
// * 49. agreeOrDisagree(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
// * 50. lifePhase(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
// * 51. finalGrade(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
// * 52. reportingForDuty(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
// * 53. Fix The Broken Code: CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
// * 54. calculateWeight(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
// * 55. truthyOrFalsy(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
// * 56. numImaginaryFriends(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
// * 57. sillySentence(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
// * 58. howOld(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
// * 59. Fix the broken code (round 2)!: CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
// * 60. tipCalculator(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
// * 61. toEmoticon(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
// * 62. TEST
// * 63. TEST
// * 64. TEST
// * 65. Arrays
// * 66. Create an Array
// * 67. Accessing Elements
// * 68. Update Elements
// * 69. Arrays with let and const
// * 70. The .length property
// * 71. The .push() Method
// * 72. The .pop() Method
// * 73. More Array Methods
// * 74. Arrays and Functions
// * 75. Nested Arrays
// * 76. PROJECT: Secret Message
// * 77. Repeating Tasks Manually
// * 78. The For Loop
// * 79. Looping in Reverse
// * 80. Looping through Arrays
// * 81. Nested Loops
// * 82. The While Loop
// * 83. Do...While Statements
// * 84. The break Keyword
// * 85. PROJECT: Whale Talk
// * 86. Exercise: Spelling Wizard
// * 87. Exercise: Pokemon Catcher
// * 88. Creating Object Literals
// * 89. Accessing Properties
// * 90. Bracket Notation
// * 91. Property Assignment
// * 92. Methods
// * 93. Nested Objects
// * 94. Pass By Reference
// * 95. Looping Through Objects
// * 96. The this Keyword
// * 97. Arrow Functions and this
// * 98. Privacy
// * 99. Getters

// !=============================================
// !=============================================
// !=============================================

// * 1. CONSOLE LOG
console.log(25);
console.log(6);

// !=============================================
// !=============================================

// * 2. COMMENTS
console.log(25);

// !=============================================
// !=============================================

// * 3. Arithmetic Operators
console.log(25 + 3.5);
console.log(2023 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);
console.log(2023 - 1969);

// !=============================================
// !=============================================

// * 4. String Concatenation
console.log("Hello" + "World");
console.log("Hello " + "World");
console.log(8 + 2);

// !=============================================
// !=============================================

// * 5. Properties

console.log("Teaching the new world world how to code".length); // Prints 40 because the it has 40 characters
console.log("My name is usama".length); // Prints 16 because the it has 16 characters
console.log("I am living in karahi".length); // Prints 21 because the it has 21 characters
console.log("30289".length); // Prints 5 because the it has 5 characters
console.log("03201237617".length); // Prints 11 because the it has 11 characters

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

let myNameB = "usama";
myNameB = "alpha";
console.log(myNameB);

// when using let (and even var) is that we can declare a variable without assigning the variable a value.

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

// !=============================================
// !=============================================

// * 10. Create a Variable: const

const entree = "Enchiladas";
console.log(entree);
entree = "Tacos"; //Get error because constant variable doesn't change property like let.
const myNameC = "Usama";
console.log(myNameC);

// !=============================================
// !=============================================

// * 11. Mathematical Assignment Operators

let w = 4;
w = w + 1;
console.log(w); //prints 5

let w = 3000;
w += 2000;
console.log(w); //prints 5000

let w = 1000;
w -= 500;
console.log(w); //prints 500

let w = 5000;
w *= 10;
console.log(w); //prints 50000

let w = 100;
w /= 5;
console.log(w); //prints 20

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

// !=============================================
// !=============================================

// * 12. The Increment and Decrement Operator

let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b--;
console.log(b); // Output: 19

let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;
console.log(gainedDollar); //prints 4
console.log(lostDollar); //prints 49

// !=============================================
// !=============================================

// * 13. String Concatenation with Variables

let favoriteAnimal = "wolf";
console.log("My favorite animal: " + favoriteAnimal); // Output: My favorite animal: wolf'

let myPet = "armadillo";
console.log("I own a pet " + myPet + ".");
// Output: 'I own a pet armadillo.'

let name = "Usama";
console.log("My Name Is " + name); // Output: 'My Name Is Usama'

let name = "Usama";
let city = "Karachi";
let hobby = "Cricket";

console.log("My Name Is " + name + " I Live In " + city + " I Play " + hobby); //output: My Name Is Usama I Live In Karachi I Play Cricket

// !=============================================
// !=============================================

// * 14. String Interpolation

const myName = "usama";
const myCity = "karachi";
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);
//Output: My name is usama. My favorite city is karachi.

let animal = "Wolf";
let naam = "Usama";
console.log(`My name is ${naam}, My fav animal is ${animal}.`);
//Output: My name is Usama, My fav animal is Wolf.

// !=============================================
// !=============================================

// * 15. typeof operator

let newVariable = "Playing around with typeof.";
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

const myName = "Usama";
console.log(typeof myName); //Output: string (because "usama" is a string value.)

const myNumber = 0320123767;
console.log(typeof myNumber); //Output: number (because 0320123767 is a number value.)

const health = true;
console.log(typeof health); //Output: boolean (because true is a boolean value.)

// !=============================================
// !=============================================

// * 16. PROJECTS: Kelvin Weather

const kelvin = 0; //kelvin temprature 293
const celsius = kelvin - 273; //kelvin - celsius
let fahrenheit = celsius * (9 / 5) + 32; // farenhiet calculate
fahrenheit = Math.floor(fahrenheit); // Celsius to Fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);

// !=============================================
// !=============================================

// * 17. PROJECTS: Dog Years

const myAge = 25; //My age
let earlyYears = 2; //early years
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;

let myName = "M Usama".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years 
old in human years which is ${myAgeInDogYears} years 
old in dog years.`);

//Output: 21
/* 
21
92
My name is m usama. I am 25 years 
old in human years which is 113 years 
old in dog years. 
*/

// !=============================================
// !=============================================

// * 18. If Statement

if (true) {
  console.log("This message will print!");
}
// Prints: This message will print!

// !=============================================
// !=============================================

// * 19. If...Else Statements

let sale = true;

sale = false;

if (sale) {
  console.log("Time to buy!");
} else {
  console.log("Time to wait for a sale.");
}
// output: Time to wait for a sale.

// !=============================================
// !=============================================

// * 20. Comparison Operators

let hungerLevel = 7;
if (hungerLevel !== 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}

let myNo = 9;
if (myNo > 9) {
  console.log("Display 9");
} else {
  console.log("Display None");
}
//output: Display None

let myNo = 10;
if (myNo < 15) {
  console.log("display true");
} else {
  console.log("display false");
}
//output: Display True

// !=============================================
// !=============================================

// * 21. Logical Operators

let mood = "sleepy";
let tirednessLevel = 6;

if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet");
}
// output: not bed time yet

// !=============================================
// !=============================================

// * 22. Truthy and Falsy

let value = "There's a value";
if (value) {
  console.log("Yes there's a value");
} else {
  console.log("No there's no value");
}
//output: Yes there's a value (because variable has a truthy value)

let value = 0;
if (value) {
  console.log("Yes there's a value");
} else {
  console.log("No there's no value");
}
//output: No there's no value (because variable has a falsy value of 0)

let value = "";
if (value) {
  console.log("Yes there's a value");
} else {
  console.log("No there's no value");
}
//output: No there's no value (because variable has a falsy value of "")

let value = null;
if (value) {
  console.log("Yes there's a value");
} else {
  console.log("No there's no value");
}
//output: No there's no value (because variable has a falsy value of null)

let value = undefined;
if (value) {
  console.log("Yes there's a value");
} else {
  console.log("No there's no value");
}
//output: No there's no value (because variable has a falsy value of undefined)

let value = NaN;
if (value) {
  console.log("Yes there's a value");
} else {
  console.log("No there's no value");
}
//output: No there's no value (because variable has a falsy value of NaN)

// !=============================================
// !=============================================

// * 23. Truthy and Falsy Assignment

let userName = "";
let defaultName;

if (userName) {
  defaultName = defaultName;
} else {
  defaultName = "Stranger";
}

console.log(defaultName); //Output: Stranger (because username has falsy statement)
//we can also use the shorthand code of || for same task

let userName = "";
let defaultName = userName || "stranger";

console.log(defaultName); //output: stranger

//another example

let tool = "marker";

let writingUtensil = tool || "pen";

console.log(`The ${writingUtensil} is mightier than the sword.`);

// !=============================================
// !=============================================

// * 24. Ternary Operator

let myAnimal = true;

myAnimal ? console.log("Yes, it is true") : console.log("No, it is not true");
//output: Yes, it is true

//another example

let myHome = false;
myHome ? console.log("Yes") : console.log("No");
//output: No

//another example

let myBrother = "Hammad";
myBrother === "Hammad"
  ? console.log("Yes, he is my brother.")
  : console.log("No, he is not my brother.");
//output: Yes, he is my brother

// !=============================================
// !=============================================

// * 25. Else If Statements

let season = "summer";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}

//another example

let holyMonth = "Ramzan";

if (holyMonth === "Rajab") {
  console.log("It is rajab, it is also a holy month.");
} else if (holyMonth === "Rabi") {
  console.log("it is rabi, the prophet's birth month.");
} else if (holyMonth === "Shaaban") {
  console.log("it is shabaan.");
} else if (holyMonth === "Ramzan") {
  console.log("This is ramzan, the most holy month in a year.");
} else {
  console.log("invalid month");
}
//output: This is ramzan, the most holy month in a year.

// !=============================================
// !=============================================

// * 26. The switch keyword

let athleteFinalPosition = "first place";

switch (athleteFinalPosition) {
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}

//Output: You get the gold medal!

let holyMonthA = "Ramzan";
switch (holyMonthA) {
  case "Rajab":
    console.log("This is rajab");
    break;
  case "Rabi":
    console.log("This is rabi");
    break;
  case "Ramzan":
    console.log("Yes, Ramzan");
    break;
  default:
    console.log("No");
}

//Output: You get the gold medal!

// !=============================================
// !=============================================

// * 27. PROJECT: Magic Eight Ball

let userName = "usama";

userName ? console.log("Hello, usama!") : console.log("Hello!");

let userQuestion = "Question";
console.log(`I aksed ${userQuestion} to ${userName}`);

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say n";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

console.log(`Hello ${eightBall}`);

// !=============================================
// !=============================================

// * 28. PROJECT: Race Day

let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 19;

if (early && age > 18) {
  raceNumber += 1000;
}

if (early && age > 18) {
  console.log(`Race will begin at 930, you race no is ${raceNumber}.`);
} else if (!early && age > 18) {
  console.log(`Race will begin at 1100, you race no is ${raceNumber}.`);
} else if (age < 18) {
  console.log(`Race will begin at 1230, you race no is ${raceNumber}.`);
} else {
  console.log("Please approach the regitration desk.");
}

// !=============================================
// !=============================================

// * 29. What are Functions?

const width = 10;
const height = 6;
const area = width * height;
console.log(area); // Output: 60

//another example

// Area of the first rectangle
const width1 = 10;
const height1 = 6;
const area1 = width1 * height1;

// Area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 = width2 * height2;

// Area of the third rectangle
const width3 = 10;
const height3 = 10;
const area3 = width3 * height3;

// !=============================================
// !=============================================

// * 30. Function Declarations

greetWorld(); // Output: Hello, World!

function greetWorld() {
  console.log("Hello, World!");
}

//another example

function getReminder() {
  console.log("Water the plants.");
}

function greetInSpanish() {
  console.log("Buenas tardes.");
}

// !=============================================
// !=============================================

// * 31. Calling a Function

function getGreeting() {
  console.log("Hello, world!");
}

getGreeting(); //output: Hello, world!

//another example

function sayThanks() {
  console.log("Thank you for your purchase! We appreciate your business.");
}

sayThanks(); //output: Thank you for your purchase! We appreciate your business.
sayThanks(); //output: Thank you for your purchase! We appreciate your business.
sayThanks(); //output: Thank you for your purchase! We appreciate your business.

// !=============================================
// !=============================================

// * 32. Parameters and Arguments

function calculateArea(width, height) {
  console.log(width * height);
}

calculateArea(10, 6); //output: 60

//another example

function sayThanks(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}

sayThanks("Cole");
//output: Thank you for your purchase Cole! We appreciate your business.

// !=============================================
// !=============================================

// * 33. Default Parameters

function greeting(name = "stranger") {
  console.log(`hello, ${name}!`);
}

greeting("Cole"); //Output: hello, Cole!
greeting(); //Output: hello, stranger!

//another example

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

// !=============================================
// !=============================================

// * 34. Return

function monitorCount(rows, columns) {
  return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors); //Output: 20

// !=============================================
// !=============================================

// * 35. Helper Functions

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost); //Output: 4000

// !=============================================
// !=============================================

// * 36. Function Expressions

const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
plantNeedsWater("Tuesday");

console.log(plantNeedsWater("Tuesday")); //Output: false

// !=============================================
// !=============================================

// * 37. Arrow Functions

const plantNeedsWater = (day) => {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

// !=============================================
// !=============================================

// * 38. Concise Body Arrow Functions

const plantNeedsWater = (day) => (day === "Wednesday" ? true : false);

// !=============================================
// !=============================================

// * 39. PROJECT: Rock, Paper, or Scissors

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "This game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper");
    return "Sorry, computer won!";
  } else {
    return "Congratulations! you won";
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors");
    return "Sorry, computer won!";
  } else {
    return "Congratulations! you won";
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock");
    return "Sorry, computer won!";
  } else {
    return "Congratulations! you won";
  }

  if (userChoice === "bomb") {
    return "Congratulations! You won.";
  }
};

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log("You Threw: " + userChoice);
  console.log("Computer Threw: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

// !=============================================
// !=============================================

// * 40. PROJECT: Sleep Debt Calculator

// !=============================================
// !=============================================

// * 41. Blocks and Scope

const city = "New York City";

const logCitySkyline = () => {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
};

console.log(logCitySkyline());

// !=============================================
// !=============================================

// * 42. Global Scope

const color = "blue";

const returnSkyColor = () => {
  return color; // blue
};

console.log(returnSkyColor()); // blue

//another example

const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";

const callMyNightSky = () => {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
};

console.log(callMyNightSky());
//Output: Night Sky: The Moon, North Star, and The Milky Way

// !=============================================
// !=============================================

// * 43. Block Scope

const logVisibleLightWaves = () => {
  const lightWaves = "Moonlight";
  console.log("Moonlight");
};

logVisibleLightWaves(); //output: Moonlight
console.log(lightWaves); //output: error

// !=============================================
// !=============================================

// * 44. Scope Pollution

let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100

//another example

const satellite = "The Moon";
const galaxy = "The Milky Way";
let stars = "North Star";

const callMyNightSky = () => {
  stars = "Sirius";
  return "Night Sky: " + satellite + ", " + stars + ", " + galaxy;
};

console.log(callMyNightSky());
console.log(stars); //It is changes the global variable with sirius because we didn't use "let".

// !=============================================
// !=============================================

// * 45. Practice Good Scoping

const logVisibleLightWaves = () => {
  let lightWaves = "Moonlight";
  let region = "The Arctic";
  // Add if statement here:
  if (region === "The Arctic") {
    let lightWaves = "Northern Lights";
    console.log(lightWaves);
  }

  console.log(lightWaves);
};

logVisibleLightWaves();

// !=============================================
// !=============================================

// * 46. PROJECT: Training Days

// The scope of `random` is too loose
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

// The scope of `days` is too tight
const getTrainingDays = (event) => {
  let days;
  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }

  return days;
};
const name = "Nala";
// The scope of `name` is too tight
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime

logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = "Warren";

logEvent(name2, event2);
logTime(name2, days2);

// !=============================================
// !=============================================

// * 47. Introduction: CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS

// Write your function here:

const greetWorld = () => {
  return "Hello, World!";
};

/* Write code to test your function. Even if we provide code to test your function, 
you should add further tests to make sure your function works correctly in all the specified situations */

// !=============================================
// !=============================================

// * 48. canIVote(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS

// Write your function here:

const canIVote = (age) => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(canIVote(19)); // Should print true

// We encourage you to add more function calls of your own to test your code!

// !=============================================
// !=============================================

// * 49. agreeOrDisagree(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS

// Write your function here:

const agreeOrDisagree = (first, second) => {
  if (first === second) {
    return "You agree!";
  } else {
    return "You disagree!";
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(agreeOrDisagree("yep", "yep"));
// Should print 'You agree!'

// We encourage you to add more function call of your own to test your code!

// !=============================================
// !=============================================

// * 50. lifePhase(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS

// Write your function here:

const lifePhase = (age) => {
  if (age < 0 || age > 140) {
    return "This is not a valid age";
  } else if (age < 4) {
    return "baby";
  } else if (age < 13) {
    return "child";
  } else if (age < 20) {
    return "teen";
  } else if (age < 65) {
    return "adult";
  } else {
    return "senior citizen";
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(45)); //should print 'child'

// We encourage you to add more function calls of your own to test your code!

// !=============================================
// !=============================================

// * 51. finalGrade(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS

// Write your function here:

const finalGrade = (midterm, final, homework) => {
  if (
    midterm < 0 ||
    midterm > 100 ||
    final < 0 ||
    final > 100 ||
    homework < 0 ||
    homework > 100
  ) {
    return "You have entered an invalid grade.";
  }
  let average = (midterm + final + homework) / 3;
  if (average < 60) {
    return "F";
  } else if (average < 70) {
    return "D";
  } else if (average < 80) {
    return "C";
  } else if (average < 90) {
    return "B";
  } else {
    return "A";
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)); // Should print 'A'

// We encourage you to add more function calls of your own to test your code!

// !=============================================
// !=============================================

// * 52. reportingForDuty(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS

// Write your function here:
const reportingForDuty = (rank, lastName) =>
  `${rank} ${lastName} reporting for duty!`;

// Uncomment the line below when you're ready to try out your function
console.log(reportingForDuty("Private", "Fido")); // Should return 'Private Fido reporting for duty!'

// !=============================================
// !=============================================

// * 53. Fix The Broken Code: CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS

const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
  let die1 = Math.floor(Math.random() * 6 + 1);
  let die2 = Math.floor(Math.random() * 6 + 1);
  return die1 + die2;
};

// !=============================================
// !=============================================

// * 54. calculateWeight(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS

// Write your function here:

const calculateWeight = (earthWeight, planet) => {
  switch (planet) {
    case "Mercury":
      return earthWeight * 0.378;
    case "Venus":
      return earthWeight * 0.907;
    case "Mars":
      return earthWeight * 0.377;
    case "Jupiter":
      return earthWeight * 2.36;
    case "Saturn":
      return earthWeight * 0.916;
    default:
      return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(calculateWeight(100, "Jupiter")); // Should print 236

// We encourage you to add more function calls of your own to test your code!

// !=============================================
// !=============================================

// * 55. truthyOrFalsy(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS

// Write your function here:

const truthyOrFalsy = (value) => {
  if (value) {
    return true;
  }
  return false;
};

// Uncomment the line below when you're ready to try out your function
console.log(truthyOrFalsy(0)); // Should print false

// We encourage you to add more function calls of your own to test your code!

// !=============================================
// !=============================================

// * 56. numImaginaryFriends(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS

// Write your function here:

const numImaginaryFriends = (totalFriends) => Math.ceil(totalFriends * 0.25);

// Uncomment the lines below when you're ready to try out your function
// console.log(numImaginaryFriends(20)) // Should print 5
console.log(numImaginaryFriends(10)); // Should print 3 (2.5 rounded up!)

// !=============================================
// !=============================================

// * 57. sillySentence(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS

// Write your function here:

const sillySentence = (adjective, verb, noun) =>
  `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;

// Uncomment the line below when you're ready to try out your function
console.log(sillySentence("excited", "love", "functions"));

// !=============================================
// !=============================================

// * 58. howOld(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS

/* 
Our solution is written as a function expression and uses string interpolation, but it would be equally acceptable to use a function declaration and/or string concatenation
*/

const howOld = (age, year) => {
  // The following two lines make it so that our function always knows the current year.
  let dateToday = new Date();
  let thisYear = dateToday.getFullYear();
  // It is totally ok if your function used the current year directly!

  const yearDifference = year - thisYear;
  const newAge = age + yearDifference;

  if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`;
  } else if (newAge < 0) {
    return `The year ${year} was ${-newAge} years before you were born`;
  } else {
    return `You were ${newAge} in the year ${year}`;
  }
};

// Once your function is written, write function calls to test your code!

// !=============================================
// !=============================================

// * 59. Fix the broken code (round 2)!: CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS

const whatRelation = (percentSharedDNA) => {
  if (percentSharedDNA === 100) {
    return "You are likely identical twins.";
  }
  if (percentSharedDNA > 34) {
    return "You are likely parent and child or full siblings.";
  }
  if (percentSharedDNA > 13) {
    return "You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.";
  }
  if (percentSharedDNA > 5) {
    return "You are likely 1st cousins.";
  }
  if (percentSharedDNA > 2) {
    return "You are likely 2nd cousins.";
  }
  if (percentSharedDNA > 0) {
    return "You are likely 3rd cousins";
  }
  return "You are likely not related.";
};

console.log(whatRelation(34));
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3));
// Should print 'You are likely 2nd cousins.'

// !=============================================
// !=============================================

// * 60. tipCalculator(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS

// Write your function here:

const tipCalculator = (quality, total) => {
  switch (quality) {
    case "bad":
      return total * 0.05;
    case "ok":
      return total * 0.15;
    case "good":
      return total * 0.2;
    case "excellent":
      return total * 0.3;
    default:
      return total * 0.18;
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator("good", 100)); //should return 20

// We encourage you to add more function calls of your own to test your code!

// !=============================================
// !=============================================

// * 61. toEmoticon(): CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS

// Write your function here:

const toEmoticon = (meaning) => {
  switch (meaning) {
    case "shrug":
      return '|_{"}_|';
    case "smiley face":
      return ":)";
    case "frowny face":
      return ":(";
    case "winky face":
      return ";)";
    case "heart":
      return "<3";
    default:
      return "|_(* ~ *)_|";
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("whatever"));
// Should print  '|_(* ~ *)_|'

// We encourage you to add more function calls of your own to test your code!

// !=============================================
// !=============================================

// * 62. TEST

// Create a function colorMessage() that takes 2 string arguments, favoriteColor and shirtColor.

// If the value of favoriteColor is the same as the value of shirtColor return the string 'The shirt is your favorite color!'.

// If not, return the string 'That is a nice color.'

// Feel free to test your code under the function definition.

const colorMessage = (favoriteColor, shirtColor) => {
  if (favoriteColor === shirtColor) {
    return "The shirt is your favorite color!";
  } else {
    return "That is a nice color.";
  }
};

// !=============================================
// !=============================================

// * 63. TEST

// Create a function isEven() that takes a number as its only parameter.
// The function should return true if the number is even and false if the number is odd.

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

// !=============================================
// !=============================================

// * 64. TEST

// Create a function numberDigits() that takes the variable x as its only parameter.

// If the variable x is between 0 and 9, return the string 'One digit: N',
// where N is the value of x. For example, numberDigits(5) would return:

// 'One digit: 5'
// If the variable x is between 10 and 99, return the string 'Two digits: N',
// where N is the value of x. For example, numberDigits(12) would output:

// 'Two digits: 12'
// Any other value of x, including negative numbers, return the string
// 'The number is: N', where N is the value of x. For example, numberDigits(-202) would output:

// 'The number is: -202'
// Feel free to test out your code below the function definition.

const numberDigits = (x) => {
  if (x >= 0 && x <= 9) {
    return `One digit: ${x}`;
  } else if (x >= 10 && x <= 99) {
    return `Two digits: ${x}`;
  } else {
    return `The number is: ${x}`;
  }
};

// !=============================================
// !=============================================

// * 65. Arrays

let newYearsResolutions = [
  "Keep a journal",
  "Take a falconry class",
  "Learn to juggle",
];

let myName = ["Usama", "Wolf"];

console.log(newYearsResolutions);
console.log(myName);

// !=============================================
// !=============================================

// * 66. Create an Array

const hobbies = ["Usama", "Wolf", "Alpha97"];

console.log(hobbies);

// !=============================================
// !=============================================

// * 67. Accessing Elements

const famousSayings = [
  "Fortune favors the brave.",
  "A joke is a very serious thing.",
  "Where there is love there is life.",
];

const listItem = famousSayings[0];

console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]); //output: undefined

// !=============================================
// !=============================================

// * 68. Update Elements

let groceryList = ["bread", "tomatoes", "milk"];

groceryList[1] = "avocados";

console.log(groceryList); //output: [ 'bread', 'avocados', 'milk' ]

// !=============================================
// !=============================================

// * 69. Arrays with let and const

let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

condiments[0] = "Mayo";

console.log(condiments);

condiments = ["Mayo"];

console.log(condiments);

utensils[3] = "Spoon";

console.log(utensils);

// !=============================================
// !=============================================

// * 70. The .length property

const objectives = ["Learn a new language", "Read 52 books", "Run a marathon"];

console.log(objectives.length); //output: 3

// !=============================================
// !=============================================

// * 71. The .push() Method

const chores = ["wash dishes", "do laundry", "take out trash"];

chores.push("take out shapatar", "take out alpha");

console.log(chores);

// Output:
// [ 'wash dishes',
//   'do laundry',
//   'take out trash',
//   'take out shapatar',
//   'take out alpha' ]

// !=============================================
// !=============================================

// * 72. The .pop() Method

const chores = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];

chores.pop();

console.log(chores);

// output: [ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ]

// !=============================================
// !=============================================

// * 73. More Array Methods

const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];

groceryList.shift();

console.log(groceryList);

groceryList.unshift("popcorn");

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf("pasta");

console.log(pastaIndex);

// output:
// [ 'bananas',
//   'coffee beans',
//   'brown rice',
//   'pasta',
//   'coconut oil',
//   'plantains' ]
// [ 'popcorn',
//   'bananas',
//   'coffee beans',
//   'brown rice',
//   'pasta',
//   'coconut oil',
//   'plantains' ]
// [ 'bananas', 'coffee beans', 'brown rice' ]
// [ 'popcorn',
//   'bananas',
//   'coffee beans',
//   'brown rice',
//   'pasta',
//   'coconut oil',
//   'plantains' ]
// 4

// !=============================================
// !=============================================

// * 74. Arrays and Functions

const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}

changeArr(concept);

console.log(concept);

const removeElement = (newArr) => {
  newArr.pop();
};

removeElement(concept);

console.log(concept);

//output:
// [ 'arrays', 'can', 'be', 'MUTATED' ]
// [ 'arrays', 'can', 'be' ]

// !=============================================
// !=============================================

// * 75. Nested Arrays

const numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const target = numberClusters[2][1];

console.log(target); //output: 6

// !=============================================
// !=============================================

// * 76. PROJECT: Secret Message

let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

secretMessage.pop();

console.log(secretMessage.length);

secretMessage.push("to", "Program");

secretMessage[7] = "right";

secretMessage.shift();

secretMessage.unshift("Programming");

secretMessage.splice(6, 5, "know");

console.log(secretMessage.join());

//output
// 23
// Programming,is,not,about,what,you,know,it,is,about,what,you,can,figure,out.,-2015,,Chris,Pine,,Learn,to,Program

// !=============================================
// !=============================================

// * 77. Repeating Tasks Manually

const vacationSpots = ["Makkah", "Madina", "Norway"];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//ouput
// Makkah
// Madina
// Norway

// !=============================================
// !=============================================

// * 78. The For Loop

// Write your code below

for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}

for (let counter = 0; counter < 20; counter++) {
  console.log(counter);
}

// output:
// 10
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19

// !=============================================
// !=============================================

// * 79. Looping in Reverse

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

for (let number = 20; number >= 0; number--) {
  console.log(number);
}

//output:
// 20
// 19
// 18
// 17
// 16
// 15
// 14
// 13
// 12
// 11
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

// !=============================================
// !=============================================

// * 80. Looping through Arrays

const vacationSpots = ["Bali", "Paris", "Tulum"];

// Write your code below

for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}

//output:
// I would love to visit Bali
// I would love to visit Paris
// I would love to visit Tulum

// !=============================================
// !=============================================

// * 81. Nested Loops

// Write your code below

let bobsFollowers = ["Joe", "Marta", "Sam", "Erin"];
let tinasFollowers = ["Sam", "Marta", "Elle"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// !=============================================
// !=============================================

// * 82. The While Loop

const cards = ["diamond", "spade", "heart", "club"];

// Write your code below

let currentCard;

while (currentCard != "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

//output:
// heart
// spade

// !=============================================
// !=============================================

// * 83. Do...While Statements

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded + " cup was added.");
} while (cupsAdded < cupsOfSugarNeeded);

//output
// 1 cup was added.
// 2 cup was added.
// 3 cup was added.

// !=============================================
// !=============================================

// * 84. The break Keyword

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);

  if (rapperArray[i] === "Notorious B.I.G.") break;
}

console.log("And if you don't know, now you know.");

// output
// Lil' Kim
// Jay-Z
// Notorious B.I.G.
// And if you don't know, now you know.

// !=============================================
// !=============================================

// * 85. PROJECT: Whale Talk

const input = "turpentine and turtles";

const vowels = ["a", "e", "i", "o", "u"];

const resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  // console.log(`inputIndex is ${inputIndex}`);
  if (input[inputIndex] === "e") {
    resultArray.push(input[inputIndex]);
  }
  if (input[inputIndex] === "u") {
    resultArray.push(input[inputIndex]);
  }
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    //console.log(`vowelIndex is ${vowelIndex}.`);
    if (input[inputIndex] === vowels[vowelIndex]) {
      //console.log(input[inputIndex]);
      resultArray.push(input[inputIndex]);
    }
  }
}

//console.log(resultArray);

const resultString = resultArray.join("").toUpperCase();
console.log(resultString);

//output: UUEEIEEAUUEE

// !=============================================
// !=============================================

// * 86. Exercise: Spelling Wizard

// First, let’s write a program to help us improve our spelling skills.

// Given the spellingWord, use a for...of loop to log each letter using console.log().

const spellingWord = "hippopotamus";

// Write your code below

for (const spell of spellingWord) {
  console.log(spell);
}

// * 87. Exercise: Pokemon Catcher

// Write a for...of loop that iterates through our pokemonList array.

// Inside the block of the for...of loop, use console.log() and string interpolation as modeled above to log each
// element in the pokemon array within the string 'You caught a 'X'!' For example, the first iteration of the loop
// should print ‘You caught a Pikachu!’ to the console.

// One of the elements, 'Yoshi', is not a Pokemon. If you encounter 'Yoshi', use continue to skip this element
// before it is logged to the console.

const pokemonList = ["Pikachu", "Charizard", "Squirtle", "Yoshi", "Snorlax"];

// Write your code below
for (const pokemon of pokemonList) {
  if (pokemon === "Yoshi") {
    continue;
  }
  console.log(`You caught a ${pokemon}`);
}

// !=============================================
// !=============================================

// * 88. Creating Object Literals

let fasterShip = {
  "Fuel Type": "Turbo Fuel",
  color: "silver",
};

// !=============================================
// !=============================================

// * 89. Accessing Properties

let spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

// Write your code below

let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;

// !=============================================
// !=============================================

// * 90. Bracket Notation

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let propName = "Active Mission";

// Write your code below
let isActive = spaceship["Active Mission"];

console.log(spaceship[propName]);

// !=============================================
// !=============================================

// * 91. Property Assignment

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
};

// Write your code below

spaceship.color = "glorious gold";
spaceship.numEngines = 9;
delete spaceship["Secret Mission"];

console.log(spaceship);

// output:
// { 'Fuel Type': 'Turbo Fuel',
//   homePlanet: 'Earth',
//   color: 'glorious gold',
//   numEngines: 9 }

// !=============================================
// !=============================================

// * 92. Methods

let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// Write your code below

let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

alienShip.retreat();

alienShip.takeOff();

//output:
// We no longer wish to conquer your planet. It is full of dogs, which we do not care for.
// Spim... Borp... Glix... Blastoff!

// !=============================================
// !=============================================

// * 93. Nested Objects

let spaceship = {
  passengers: [{ name: "Wolf" }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

let capFave = spaceship.crew.captain["favorite foods"][0];

passengers: [{ name: "Wolf" }];

let firstPassenger = spaceship.passengers[0];

// !=============================================
// !=============================================

// * 94. Pass By Reference

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

// Write your code below

let greenEnergy = (obj) => {
  obj["Fuel Type"] = "avocado oil";
};

let remotelyDisable = (obj) => {
  obj.disabled = true;
};

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship);

//output:
// { 'Fuel Type': 'avocado oil',
//   homePlanet: 'Earth',
//   disabled: true }

// !=============================================
// !=============================================

// * 95. Looping Through Objects

let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

// Write your code below

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

for (let crewMember in spaceship.crew) {
  console.log(
    `${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`
  );
}

//output:
// captain: Lily
// chief officer: Dan
// medic: Clementine
// translator: Shauna
// Lily: Computer Engineering
// Dan: Aerospace Engineering
// Clementine: Physics
// Shauna: Conservation Science

// !=============================================
// !=============================================

// * 96. The this Keyword

const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};

console.log(robot.provideInfo());

// !=============================================
// !=============================================

// * 97. Arrow Functions and this

const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robot.checkEnergy();

// !=============================================
// !=============================================

// * 98. Privacy

const robot = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};

robot._energyLevel = "high";
robot.recharge();

// !=============================================
// !=============================================

// * 99. Getters

const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return "My current energy level is " + this._energyLevel;
    } else {
      return "System malfunction: cannot retrieve energy level";
    }
  },
};

console.log(robot.energyLevel);

//output: My current energy level is 100

// !=============================================
// !=============================================

// * 100. Setters

const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);
