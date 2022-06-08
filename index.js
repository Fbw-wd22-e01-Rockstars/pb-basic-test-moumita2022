// Add answers here

/* ### Conditional Algorithms 

#### 1. Los or New?
Create a function named "_nameOfCity_". If a passed string begins with "_Los_" or "_New_", then return the full string. If not, return "_The city name does not begin with Los or New_". The function should be **case insensitive**.

##### Examples*/

function nameOfCity(city) {
  if (
    city.length >= 3 &&
    (city.slice(0, 3) == `Los` || city.slice(0, 3) == `New`)
  ) {
    return city;
  } else {
    return "The city name does not begin with Los or New";
  }
}
console.log(nameOfCity("New York")); // New York
console.log(nameOfCity("newark"));
console.log(nameOfCity("London")); // The city name does not begin with Los or New

// nameOfCity('New York') ➞ 'New York'
// nameOfCity('newark') ➞ 'newark'
// nameOfCity('London') ➞ 'The city name does not begin with Los or New'

/*#### 2. isDivisible?
Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false.

##### Examples*/
function isDivisible(num) {
  if (num % 100 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isDivisible(100)); // true
console.log(isDivisible(1000)); // true
console.log(isDivisible(1)); // false

/*isDivisible(1) ➞ false
isDivisible(1000) ➞ true
isDivisible(100) ➞ true



#### 4. What's the weather?
Use a **ternary operator** to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_".

##### Example*/
let isRaining = (skyRains) =>
  skyRains === true || skyRains !== false
    ? console.log("wet day - you need an umbrella")
    : console.log("dry day - leave your umbrella at home");

isRaining(true); // wet day - you need an umbrella
isRaining(false); // dry day - leave your umbrella at home

/*isRaining(true) ➞ 'wet day - you need an umbrella'


### Loops 

#### 1. Sequence
Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.

##### Example*/
let numm = [1, 2, 4, 8, 16, 32, 64, 128];
function geometricalSequence() {
  for (let i = 0; i < numm.length; i++) {
    console.log(`${numm[i] * 2}`);
  }
}

geometricalSequence();//1 2 4 8 16 32 64 128 256
//geometricalSequence() ➞ '1 2 4 8 16 32 64 128 256'

/*
#### 2. Multiples
Create a function named "_multiplesOfThree_" and **use a loop** to return the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.

##### Example*/
let num2 = [1, 2, 3, 4, 5];
function multiplesOfThree() {
  for (let i = 0; i < num2.length; i++) {
    console.log(`${num2[i] * 3}`);
  }
}
multiplesOfThree(); // 3 6 9 12 15
/*multiplesOfThree() ➞ '3 6 9 12 15'

### Math 

#### 1. You've got the power
Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should **use a Math object method** to make the calculation.

##### Examples*/
const powerOf = function (n) {
  console.log(n ** n);
};
powerOf(3); // 27
powerOf(4); // 256

/*powerOf(3) ➞ 27
powerOf(4) ➞ 256
````

### Problem Solving 

#### 1. How many? 
Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any. **Return the vowel count** of the string. 

##### Examples*/
const vowelFive = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
function vowelCount(strg) {
  let result = 0;
  for (let letter of strg.toLowerCase()) {
    if (vowelFive.includes(letter)) {
      result++;
    }
  }
  return result;
}
console.log(vowelCount("hello")); // 2
console.log(vowelCount("test")); //1
console.log(vowelCount("fbw")); // 0

/*vowelCount("hello") ➞ 2
vowelCount("test") ➞ 1
vowelCount("fbw") ➞ 0
 */

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
