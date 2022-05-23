"use strict";

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
  console.log(`he is too young to vote 🇺🇬`);
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
for (let trophy = "🏆"; trophy.length < 15; trophy = trophy += "🏆") {
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
//   console.log(`Team Dolphins are winners of this Competition 🏆`);
// } else if (averageKoalas > averageDolphin && averageKoalas >= 100) {
//   console.log(`Team Koalas are winners of this Competition 🏆`);
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

const studentBioData = function (studentFname, studentLname, stream) {
  const studentDescription = ` ${studentFname} ${studentLname} in ${stream} class`;
  console.log(studentDescription);
};
studentBioData("Agaba", "Nelson", "P5");

const averageScore = function (
  english,
  science,
  mathmatics,
  socialStudies,
  religiousEduc
) {
  const total = english + science + mathmatics + socialStudies + religiousEduc;
  const average = total / 5;
  console.log(`And average Score is ${average}`);
};
averageScore(45, 60, 90, 95, 100);
averageScore(78, 98, 57, 62, 88);
averageScore(67, 50, 57, 62, 78);

const calAverage = (scoreOne, scoreTwo, scoreThree) =>
  (scoreOne + scoreTwo + scoreThree) / 3;

const avgDolphins = calAverage(44, 23, 71);
const avgKoalas = calAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win the trophy🏆 with ${avgDolphins} points`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win the trophy 🏆with ${avgKoalas} points`);
  } else {
    console.log(`No team wins`);
  }
};
console.log(checkWinner(avgDolphins, avgKoalas));
console.log(avgKoalas);
console.log(avgDolphins);

// ......ARRAYS
//......Array creation
const friends = ["Brian", "Nelson", "Henry", "Obed", "Kamanzi"];
console.log(friends);

// another way of creating arrays
const bestFriends = new Array("Nelson", "Phiona", "Scovia", "Jacke", "Ireen");
console.log(bestFriends);
