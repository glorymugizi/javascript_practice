'use strict';

// const entireHeading = document.querySelector("#heading");
// const childHeading = document.querySelector("#heading article");
// const button = document.querySelector(".button");
// function headingOne() {
//   entireHeading.innerHTML = "CHANGED HEADING BY FUNCTION";
//   // console.log("heading one")
// }
// function changChildHeading() {
//   childHeading.innerHTML = "CHANGED CHILD HEADING BY FUNCTION";
//   // console.log("heading one")
// }
// button.addEventListener("click", changChildHeading);

// function myParagraphTest(a, b) {
//   return a * b;
// }
// console.log(myParagraphTest(2, 3));
// document.getElementById("testPara").innerHTML = myParagraphTest(3, 9);

// const cars = ["toyota", "volvo", "benz", "mazda"];
// document.getElementById("testPara").innerHTML = cars;
// console.log(cars);
// console.log(`${cars[0]}, ${cars[2]}`);

// names = new Array("glory", "mugizi", "ivan");

// console.log(names);
// const owner = cars.concat(names);
// console.log(owner);
// console.log(names.copyWithin(2));
// console.log(names.join(cars));

// const today = new Date();
// const name = "glory";
// console.log(name);
// function myName() {
//   return()
// }
/*let age = 40;
age = 50;
const birthYear = 2022 - age;

console.log(`He was born in ${birthYear} and his  is  a ${age} year old man`);
let m = 30 + 8;
m += 10;
m++;
console.table(m);*/

/*const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

console.log(`Mark's BMI is ${markBMI} and John's ${johnBMI}`);

const markHigherBM1 = markBMI > johnBMI;
console.log(markHigherBM1);
if (markBMI > johnBMI) {
  console.log(`mark is heavier than john`);
} else console.log(`John is lighter than mark`);

const voter = 15;
const isOfVotingAge = voter >= 18;
if (isOfVotingAge) {
  console.log(`${voter} is of a voting age`);
} else {
  console.log(`he is too young to vote πΊπ¬`);
}

const birthYear = 2003;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

const inputYear = "1999";
console.log(Number(inputYear) + 18, inputYear);
console.log(inputYear + 18);
const ages = 23;
console.log(String(ages), ages);

console.log(inputYear + ages);

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}
console.log(factorial(8));
console.log(factorial(3));
console.log(`Greetings everyone \nhope you all had a wonderful day`);
console.log(`"this is a secondline\t\t\t\\"`);
console.log(typeof 4.5);
console.log(typeof "x");
console.log(-(10 - 2));

const select = 5;
if (select == 1) {
  console.log(`you have switched on`);
} else {
  console.log(`switched off`);
}
console.log("glory" || "1");
let caught = 5 * 5;
console.log(caught);
let ten = 10;
console.log(ten * ten);
let mood = "light";
console.log(mood);
mood = "dark";
console.log(mood);
let nelson = 140;
nelson = nelson - 35;
console.log(nelson);
let jimmy;
let one = 1,
  two = 2;
console.log(one + two);
console.log(Math.max(6, 8));
console.log(Math.max(6, 8) + 200);*/
/*let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("your number is the square root of " + theNumber * theNumber);
} else {
  console.log(`hey.why didn't you give me a number?`);
}

let num = Number(prompt("pick a number"));
if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("large");
}*/

/*let numbers = 0;
while (numbers <= 12) {
  console.log(numbers);
  numbers = numbers + 2;
}*/

/*numbers = Number(prompt("pick a number"));
if (numbers / 2 === 0) {
  console.log("you have picked an even number");
} else {
  console.log("the number picked is an odd number");
}*/
/*let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

if (false != true) {
  console.log("that makes sense.");
  if (1 < 2) {
    console.log("no surprise there");
  }
}*/
// for (let numbers = 0; numbers <= 12; numbers = numbers + 2) {
//   console.log(numbers);
// }

// for (let counter = 0; counter < 10; counter = counter + 1) {
//   console.log(counter);
// }
// let result = 1;
// for (let counter = 0; counter < 10; counter = counter + 1) {
//   result = result * 2;
// }
// console.log(result);
// for (let current = 20; ; current = current + 1) {
//   if (current % 7 == 0) {
//     console.log(current);
//     break;
//   }
// }
// switch (prompt(`what is the weather like?`)) {
//   case "rainy":
//     console.log(`come with an umbrella`);
//     break;
//   case "sunny":
//     console.log("dress lightly");
//     break;
//   case "cloudy":
//     console.log("Go outside");
//     break;
//   default:
//     console.log("unknown weather type!");
// }

//triangle.

// for (let triangle = "#"; triangle.length < 8; triangle = triangle += "#") {
//   console.log(triangle);
// }

// for (let num = 1; num <= 100; num = num + 1) {
//   let output = "";
//   if (num % 3 == 0) {
//     console.log("Fizz");
//   }
//   if (num % 5 == 0 && num % 3 == 0) {
//     console.log("FizzBuzz");
//   }
//   console.log(output || num);
// }
/*for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
for (let trophy = "π"; trophy.length < 15; trophy = trophy += "π") {
  console.log(trophy);
}
//chessboard
let size = 8;
let board = "";
for (y = 0; y < size; y++) {
  for (x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);

i = 1;
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);

const square = function (x) {
  return x * x;
};
console.log(square(12));

// const theReminder = function (a) {
//   return a ** 2;
// };
// console.log(theReminder(13));

// const makeNoise = function () {
//   console.log("ping");
// };
// makeNoise();

// const power = function (base, exponent) {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// };
// console.log(power(10, 0));

// let a = 10;
// if (true) {
//   var b = 20;
//   let c = 30;
//   console.log(a + b + c);
// }
// console.log(a + c);

/* const halve = function (n) {
  console.log(n / 2);
};
let n = 10;
halve(30);
const humus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "chickpeas");
  ingredient(0.5, "teaspoon", "cumin");
};
console.log(humus(10));

for (triangle = "#"; triangle.length < 8; triangle = triangle + "#") {
  console.log(triangle);
}

const bmi = function (mass, height) {
  return mass / height ** 2;
};
console.log(bmi(10, 2));

let result = 1;
for (counter = 0; counter < 20; counter = counter + 1) {

  }
  result = result * 2;
}
console.log(result);
*/
/*const halve = function (n) {
  return n / 2;
};
let n = 10;
console.log(halve(100));
console.log(n);

const mandazi = function (multiplier) {
  const ingredients = function (amount, unit, name) {
    let ingredientsAmount = amount * multiplier;
    if (ingredientsAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientsAmount} ${unit} ${name}`);
  };
  ingredients(2, "cup", "flour");
  ingredients(1, "cup", "water");
  ingredients(2.5, "teaspoon", "baking powder");
  ingredients(2, "egg", "");
};
console.log(mandazi(3));

console.log("The future says: ", future());
function future() {
  return "You'll never have flying cars";
}

const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power(12, 2));
*/
/*const horn = () => {
  console.log("Toot");
};
const square1 = (x) => {
  return x * x;
};
console.log(square1(3));

const square2 = (x) => x * x;
console.log(square2(4));
console.log(horn());
function greet(who) {
  console.log("hello " + who);
}
greet("harry");
console.log("bye");
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + "came first");*/
/*function square(x) {
  return x * x;
}
console.log(square("hedgehog"));

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(10, 30));

function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
  return (number) => number * factor;
}
let twice = multiplier(3);
console.log(twice(5));

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(5, 2));

const tellFortune = function (
  jobTitle,
  geographicLocation,
  partnerName,
  numOfchild
) {
  let future =
    "you will be a " +
    jobTitle +
    "in " +
    geographicLocation +
    " and married to " +
    partnerName +
    " " +
    "with " +
    numOfchild +
    "kids";

  console.log(future);
};
tellFortune("teacher", "england", "Scovia", 2);
tellFortune("Doctor", "America", "Scovia", 2);*/

// const calcBmi = function (mass, height) {
//   let bmi = mass / height ** 2;
//   if (bmi < 18) {
//     console.log(`your BMI is ${bmi} and you are under weight.`);
//   } else if (bmi > 18 && bmi <= 25) {
//     console.log(`your BMI is ${bmi} and you have a normal  weight.`);
//   } else {
//     console.log(`your BMI is ${bmi} and you are obese.`);
//   }
// };
// console.log(calcBmi(54, 1.6));

// function calculateDogAge(age) {
//   let dogAge = 7 * age;
//   console.log(dogAge);
// }
// console.log(calculateDogAge(1));
// console.log(calculateDogAge(2));
// console.log(calculateDogAge(3));

// const averageDolphin = (97 + 112 + 101) / 3;
// const averageKoalas = (109 + 95 + 123) / 3;

// console.log(averageDolphin);
// console.log(averageKoalas);

// if (averageDolphin > averageKoalas && averageDolphin >= 100) {
//   console.log(`Team Dolphins are winners of this Competition π`);
// } else if (averageKoalas > averageDolphin && averageKoalas >= 100) {
//   console.log(`Team Koalas are winners of this Competition π`);
// } else if (
//   averageDolphin === averageKoalas &&
//   averageDolphin >= 100 &&
//   averageKoalas >= 100
// ) {
//   console.log(`Its a draw and rematch should be scheduled in two weeks.`);
// } else {
//   console.log(`There is no winner`);
// }

// let money = 100;
// if (money) {
//   console.log(`dont spend it all`);
// } else {
//   console.log(`you dont have money`);
// }
// const age = "18";
// if (age === 18) console.log(`he is an adult`);
// else console.log(`you are still young`);
// console.log(!age == 18);

// const driversLicense = true;
// const goodVision = true;
// const tired = false;
// const canDrive = driversLicense && goodVision && !tired;
// if (canDrive) {
//   console.log(`Sarah can drive`);
// } else {
//   console.log(`someone else should drive`);
// }

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `" The  bill was ${bill}, tip was ${tip} and total value ${bill + tip}" `
// );

// const day = prompt("what is the day of the week");
// switch (day) {
//   case "monday":
//     console.log(`plan the course meeting`);
//     break;
//   case "Tuesday":
//     console.log(`Attend the coding class`);
//     break;
// }

// const age = 23;
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);
// const bmi = (mass, height) => {
//   return mass / height ** 2;
// };
// console.log(bmi(78, 1.9));
// function logger() {
//   console.log(`My name is Glory.`);
// }
// logger();
// logger();
// function juiceProcessor(apples, oranges) {
//   const juice = `juice with ${apples} apples and ${oranges}`;
//   console.log(apples, oranges);
//   return juice;
// }
// const appleJuice = juiceProcessor(5, 9);
// console.log(appleJuice);
// const calAge = (birthyear) => 2022 - birthyear;
// console.log(`${calAge(1984)} years`);
// const continent = "Africa";
// const isIsland = false;
// let population = 20000000;
// const country = "uganda";
// let languange = "english";
// console.log(
//   typeof isIsland,
//   typeof population,
//   typeof country,
//   typeof languange
// );
// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6000000);
// console.log(population < 33000000);
// // const description =
//   country +
//   "is in " +
//   continent +
//   ", and its" +
//   population +
//   "people speak " +
//   languange;
// const description = `${country} is in ${continent} and its ${population} people speak ${languange}`;
// console.log(description);

// if (population > 33000000) {
//   console.log(`Uganda's population is above average`);
// } else {
//   console.log(
//     `Uganda's population is ${22000000 - population} million below average`
//   );
// }
// Equality operators == vs ===
/*const numNeighbours = Number(
  prompt(`How many neighbour countries does your country have`)
);
if (numNeighbours === 1) {
  console.log(`only ${numNeighbours} border!`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border`);
} else {
  console.log(`no borders`);
}*/

// LOGICAL OPERATORS
// if (languange === "english" && population < 50000000 && !isIsland) {
//   console.log(`You should live in ${country}`);
// } else {
//   console.log(`${country} doesn't meet your criteria`);
// }
//the switch statement
// switch (languange) {
//   case "chinese":
//   case "mandarin":
//     console.log(`Most number of native speakers!`);
//     break;
//   case "spanish":
//     console.log(`2nd place in number of native speakers!`);
//     break;
//   case "english":
//     console.log(`3rd place`);
//     break;
//   case "hindi":
//     console.log(`4th place`);
//     break;
//   case "arabic":
//     console.log(`4th place`);
//     break;
//   default:
//     console.log(`Great language too`);
// }
// THE TERNARY OPERATOR
// console.log(
//   population > 33000000
//     ? `Uganda's population is above average`
//     : `Uganda's population is below average`
// );
// FUNCTIONS

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }
// console.log(describeCountry("Uganda", 40, "Kampala!"));
// console.log(describeCountry("Kenya", 54, "Nairobi!"));
// console.log(describeCountry("Rwanda", 20, "Kigali!"));
// console.log(describeCountry("TZ", 70, "Dodoma!"));

//FUNCTION DECLARATION

// const percentageOfWorld1 = function (population) {
//   let worldpopln = 7900;
//   return (population / worldpopln) * 100;
// };
// const ugandaPopln = 40;
// const chinaPopln = 1441;
// const usaPopln = 500;

// console.log(percentageOfWorld1(ugandaPopln));
// console.log(percentageOfWorld1(chinaPopln));
// console.log(percentageOfWorld1(usaPopln));

// ARROW FUNCTION

// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// console.log(percentageOfWorld3(ugandaPopln));
// console.log(percentageOfWorld3(chinaPopln));
// console.log(percentageOfWorld3(usaPopln));

// // FUNCTION CALLING OTHER FUNCTIONS

// const describePopulation = function (country, population) {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has  ${population} million people which is about ${percentage} % of the world`;
//   console.log(description);
// };
// describePopulation("China", 1441);
// describePopulation("Uganda", 40);
// describePopulation("Uk", 86);

// MORE PRACTICE

// const studentBioData = function (studentFname, studentLname, stream) {
//   const studentDescription = ` ${studentFname} ${studentLname} in ${stream} class`;
//   console.log(studentDescription);
// };
// studentBioData("Agaba", "Nelson", "P5");

// const averageScore = function (
//   english,
//   science,
//   mathmatics,
//   socialStudies,
//   religiousEduc
// ) {
//   const total = english + science + mathmatics + socialStudies + religiousEduc;
//   const average = total / 5;
//   console.log(`And average Score is ${average}`);
// };
// averageScore(45, 60, 90, 95, 100);
// averageScore(78, 98, 57, 62, 88);
// averageScore(67, 50, 57, 62, 78);

// const calAverage = (scoreOne, scoreTwo, scoreThree) =>
//   (scoreOne + scoreTwo + scoreThree) / 3;

// const avgDolphins = calAverage(44, 23, 71);
// const avgKoalas = calAverage(65, 54, 49);
// console.log(avgDolphins, avgKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win the trophyπ with ${avgDolphins} points`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win the trophy πwith ${avgKoalas} points`);
//   } else {
//     console.log(`No team wins`);
//   }
// };
// console.log(checkWinner(avgDolphins, avgKoalas));
// console.log(avgKoalas);
// console.log(avgDolphins);

// // ......ARRAYS
// //......Array creation
// const friends = ["Brian", "Nelson", "Henry", "Obed", "Kamanzi"];
// console.log(friends);

// // another way of creating arrays
// const bestFriends = new Array("Nelson", "Phiona", "Scovia", "Jacke", "Ireen");
// console.log(bestFriends);
// // selecting Elements in an array
// console.log(friends[0]); // selects element at position 1 ie Brian
// console.log(friends[4]); // selects element at position 5 ie Kamanzi

// // array length
// console.log(friends.length); //prints or logs on the console total number of elements in an array. ie the friends array has 5.

// friends[2] = "Dancun"; // this replace HENRY  with Dancun
// console.log(friends[2]);

// const years = [1999, 2002, 1984, 1954, 1976];

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[3]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[1]);
// const age5 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3, age4, age5);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[3]),
//   calcAge(years[2]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);
// const newLength = friends.push("Sam", "Mark");
// console.log(friends);
// console.log(newLength);
// friends.shift();
// console.log(friends);
// const check = friends.includes("glory");
// console.log(check);

// if (friends.includes("glory")) {
//   console.log(`Glory is Your Friend`);
// } else {
//   console.log(`Glory is not among your friends `);
// }

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else return bill * 0.2;
// };

// // const tip = calcTip(100);
// // console.log(tip);
// const bills = [125, 555, 44];
// const bills1 = calcTip(bills[0]);
// const bills2 = calcTip(bills[1]);
// const bills3 = calcTip(bills[2]);

// console.log(bills1, bills2, bills3);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips, bills);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(total);
// console.log(Math.max(total[0], total[1]));
// console.log(total.length);
// console.log(total);

// // OBJECTS

// const glory = {
//   firstName: "Glory",
//   lastName: "Mugizi",
//   residence: "Mukono",
// };

// console.log(glory);

// // Dot and bracket notation
// // to select a certain property in the object we use the dot or bracket notation.
// console.log(glory.firstName);
// // this logs the first name to the console.
// console.log(glory["residence"]);

// //adding properties to the object using dot
// glory.telephoneNo = "0756889900";
// //adding properties to the object using bracket
// glory["friends"] = ["Henry", "Nelly", "Brian"];

// console.log(glory.friends[1]);
// console.log(
//   `${glory.firstName} has ${glory.friends.length} , and his best friend is called ${glory.friends[0]}`
// );
// // added more properties to object glory including the functions (calcAge and getSummary)
// glory.hasDriversLicense = true;
// glory.birthYeay = 1984;
// glory.job = "Teacher";
// glory.CalcAge = function () {
//   this.age = 2022 - this.birthYeay;
//   return this.age;
// };
// glory.getSummary = function () {
//   return `${glory.firstName} is a ${glory.CalcAge()} old ${glory.job} and has ${
//     glory.hasDriversLicense ? "a" : " no"
//   } drivers license`;
// };

// console.log(glory.getSummary());

// //coding challenge
// const markInfo = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
// };
// const johnInfo = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
// };
// markInfo.CalcBmi = function () {
//   this.bmi = this.mass / this.height ** 2;
//   return this.bmi;
// };
// johnInfo.CalcBmi = function () {
//   this.bmi = this.mass / this.height ** 2;
//   return this.bmi;
// };
// console.log(markInfo.CalcBmi());
// console.log(johnInfo.CalcBmi());

// if (markInfo.bmi > johnInfo.bmi) {
//   console.log(
//     `${markInfo.fullName}'s BMI ${markInfo.bmi} is higher than ${johnInfo.fullName}'s ${johnInfo.bmi}!`
//   );
// } else if (johnInfo.bmi > markInfo.bmi) {
//   console.log(
//     `${johnInfo.fullName}'s BMI ${johnInfo.bmi} is higher than ${markInfo.fullName}'s ${markInfo.bmi}!`
//   );
// }

// // more array practice
// const populations = [40, 57, 350, 60];
// console.log(populations.length === 4);
// const percentageOfWorld1 = function (population) {
//   let worldpopln = 7900;
//   return (population / worldpopln) * 100;
// };
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// console.log(percentages);

// const neighbours = ["Kenya", "Tanzania", "Rwanda", "South sudan"];
// neighbours.push("Utopia"); // adds Utopia to the array
// console.log(neighbours);
// neighbours.pop("Utopia");
// console.log(neighbours);
// if (!neighbours.includes("Germany")) {
//   console.log(`Probably not a central European country`);
// }
// neighbours[neighbours.indexOf("Tanzania")] = "Repbulic of Tanzania";
// console.log(neighbours);

// const myCountry = {
//   country: "Uganda",
//   capital: "Kampala",
//   language: "English",
//   population: 40,
//   neighbours: ["kenya", "Rwanda", "Tanzania", "DR congo"],
// };
// console.log(myCountry);
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );
// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry.describe = function () {
//   return `${this.country} has ${this.population} million ${this.language}-speaking people,${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
// };
// // more and more practice
// console.log(myCountry.describe());
// myCountry.CheckIsland = function () {
//   return this.neighbours.length === 0 ? true : false;
// };
// console.log(myCountry.CheckIsland());

// for (let i = "glory"; i.length < 20; i += "glory") {
//   console.log(i);
// }

// // looping through Arrays

// const friends = ["Brian", "Nelson", "Henry", "Obed", "Kamanzi"];
// const bestFriendsLetters = [];
// for (let i = 0; i < friends.length; i++) {
//   console.log(`${friends[i]} is one of Glory's friends`); //reading/displaying elements of an array
//   bestFriendsLetters.push(friends[i][0]); //adding elements to an empty array with a for loop.
// }

// console.log(bestFriendsLetters);

// voters = 50;
// for (let voter = 1; voter <= 50; voter++)
//   console.log(`voter number ${voter} is currently voting`);

// const percentageOfWorld1 = function (population) {
//   let worldpopln = 7900;
//   return (population / worldpopln) * 100;
// };
// const percentage2 = [];
// const populations = [40, 57, 350, 60];
// for (let i = 0; i < populations.length; i++) {
//   const perc = percentageOfWorld1(populations[1]);
//   percentage2.push(perc);
// }
// console.log(percentage2);

// for (let i = populations.length - 1; i >= 0; i--) {
//   console.log(populations[i]);
// }
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`lifting weight reptition ${rep}`);
//   }
// }

//WHILE LOOP

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Exercise repition ${rep}`);
//   rep++;
// }

//Random numbers with a whille loop

// let dice = Math.trunc(Math.random() * 6) + 1; // math.trunc() removes the decimal points
// console.log(dice);

// while (dice !== 6) {
//   console.log(`you rolled ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`loop is about to end`);
// }

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else return bill * 0.2;
// };
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(bills[i] + tip);
// }
// console.log(tips);
// console.log(totals);

// const listA = [22, 33, 44, 66, 77];
// const listB = [11, 22, 55, 66, 88];
// const listc = [];
// for (let i = 0; i < listA.length; i++) {
//   listc.push(listA[i] + listB[i]);
// }

// console.log(listc);

const temperature = [6, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
console.log(calcAmplitude(temperature));
