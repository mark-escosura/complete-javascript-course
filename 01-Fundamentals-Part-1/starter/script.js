
// Values and Variables

let js = 'amazing'

// let firstName = "Jonas"; // declared a variable called firstName and stored a value of a string name Jonas.

// Practice Assignment: 

// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)

const country = "United States Of America";
const continent = "North America";
const population = "333,352,517 as of Saturday, September 18, 2021"

// 2. Log their values to the console

// console.log(country); // returns "United States Of America"
// console.log(continent); // returns "North America"
// console.log(population); // returns "333,352,517 as of Saturday, September 18, 2021"

// 3. (Stretch) Create an object using key:value notation using these variables.

// Created an object containing the variables from line 12 - 14

const locationStatus = {
    country: "United States Of America",
    continent: "North America",
    population: "333,352,517 as of Saturday, September 18, 2021"
}

// Log the object to the console

// console.log(locationStatus);

// Primitive data types

let javascriptIsFun = true; // declared a variable called javascriptIsFun and stored a boolean data type value : true;

// console.log(typeof true); // boolean
// console.log(typeof javascriptIsFun); // boolean
// console.log(typeof 'Jonas'); // always need to use single or double quotes to create a "string"
// console.log(typeof 23); // number

javascriptIsFun = 'YES!';

// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun); // boolean

// Practice Assignment:
/*
    1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
*/

// let isIsland = "Philippines";
let language;

/*
    2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/

// console.log(isIsland);
// console.log(population);
// console.log(language);

// let const and var // ES6 // var is the old way of declaring variable

// let age = 30; // age can be changed
// age = 31;

// const birthYear = 1991; // birthYear can't be changed
// birthYear = 1990;
// const job;

// use const by default

// Practice Assignment:

/*
1. Set the value of 'language' to the language spoken where you live (some
    countries have multiple languages, but just choose one)
*/

language = "English";

/*
2. Think about which variables should be const variables (which values will never
    change, and which might change?). Then, change these variables to const.
*/
// Variables that should be const variables stores values that can't be changed.

/*
3. Try to change one of the changed variables now, and observe what happens
*/


// Basic Operators

// const now = 2037;
// const ageJonas = now - 1991; // replaced 2037 with the variable now. // returns 46
// const ageSarah = now - 2018; // replaced 2037 with the variable now. // returns 19
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 3 means to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmnedtman';
// console.log(firstName + ' ' + lastName);

// console.log(typeof firstName); // typeOf defines the variable's data.

// let x = 10 + 5; // the equal sign is an assignment operator // returns 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x /= 4; // x = x / 4 = 25
// x++; // x = x + 1;
// x--; // x = x - 1;
// console.log(x);

// // Comparison Operators

// // >, <, >=, <=

// console.log(ageJonas > ageSarah); // conditions
// console.log(ageJonas < ageSarah); // conditions
// console.log(ageSarah >= 18); // greater than or equal to // returns a boolean value

// const isFullAge = ageSarah >= 18; // return a boolean value

// console.log(now - 1991 > now - 2018); // returns true

// Practice Assignment:

/*
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
*/
const usaPopulation = 300000000; // USA has a population of 300,000,000 people.....
const halfOfPopulation = usaPopulation / 2;

// console.log(halfOfPopulation);

/*
2. Increase the population of your country by 1 and log the result to the console
*/

// usaPopulation++; // increments the stored value inside usaPopulation by 1.

// console.log(usaPopulation); // returns 300,000,001

/*
3. Finland has a population of 6 million. Does your country have more people than
Finland?
*/

const finlandPopulation = 6000000; // Finland has a population of 6 million people 

// console.log(usaPopulation > finlandPopulation); // 300 million is greater than 6 million // returns true

/*
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
*/

const averagePopulation = 33000000;

// console.log(usaPopulation > averagePopulation); // USA has a population of 300,000,000 people while the average population has 33,000,000 people therefore // returns true

/*
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
*/

const description1 = 'The ' + country + ' is in ' + continent + ' and its ' + usaPopulation + ' million people speak ' + language;

// console.log(description1);

// const now = 2037;
// const ageJonas = now - 1991; // replaced 2037 with the variable now. // returns 46
// const ageSarah = now - 2018; // replaced 2037 with the variable now. // returns 19

// console.log( now - 1991 > now - 2018);

// let x, y;

// x = y = 25 - 10 - 5; x = y = 10

// console.log(x,y);
// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge ); // returns the mean average of the values; 32.5

// Strings and Template Literals

const firstName = 'Jonas';
const job = 'teacher'
const birthYear = 2000;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

// console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew); // whenever you use a multi-line string, always use this `template literal` .

// Practice Assignment:

/*
Recreate the 'description' variable from the last assignment, this time
using the template literal syntax
*/

const description2 = `The ${country} is in ${continent} and it's ${usaPopulation} million people speaks ${language}`;

// console.log(description2);

// ####################### Taking Decisions: IF / ELSE Statements #######################

const yourName = `Mark`
const age = 24;
const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log(`${yourName} can get his driver's license and start driving`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`${yourName} is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 2012; // birthYear has already been declared in line 202.
let century; // declared a variable century with no value 
if (birthYear <= 2000) { // returns either true or false because we are using a <= operator.
    century = 20; // assigned a value to the variable century
} else { // if the block of code before this run false, this block of code will then run.
    century = 21; // assigned another value to the variable century.
}

// console.log(century);

// ####################### Practice Assignment: #######################

/*
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
*/

// if (usaPopulation > 33) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is ${33 - usaPopulation} million below average`);
// }

/*
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
*/

// ####################### Type Conversion and Coercion #######################

// Type Conversion

const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18); // this will return a '199118'

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// ####################### Practice Assignment: #######################

/*
Predict the result of these 5 operations without executing them:
'9' - '5'; // returns 4 because a - operator is being used therefore the system reads that it's subtracting a number.
'19' - '13' + '17'; // returns 617
'19' - '13' + 17; // returns 23
'123' < 57; // returns 123 < 57; NaN; false
5 + 6 + '4' + 9 - 4 - 2; // 5 + 6 = 11, 49 - 4 - 2 = 43; therefore it returns 1143
*/



/*
2. Execute the operations to check if you were right
*/

// console.log('9' - '5'); 
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// Type Coercion 

// console.log('I am '+ 23 + ' years old.'); // all the numbers are converted to strings using the + operator

// ####################### Truthy and Falsy Values #######################

// 5 falsy values : 0, '', undefined, null, NaN

// console.log(Boolean()); // will return a boolean value; either true or false

const money = 0; // 0 is a falsey value so the else block will be executed

// if (money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log('You should get a job!');
// }

// let height; // there is no value assigned.
// if(height) {  
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is undefined'.toUpperCase()); // returns this block of code
// }

// ####################### Equality Operators: == vs === #######################

// const age2 = 18;
// if (age2 === 18) console.log('You just became an adult :D '); // strict equality operator // always default to the triple equal operator

// const age3 = '18'
// if (age3 == 18) console.log('You just became an adult :D '); // loose equality operator

// const favourite = Number (prompt("What's your favorite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if(favourite === 23) { // 22 == 23
//     console.log(`Cool! 23 is an amazing number!`);
// } else if (favourite === 7) {
//     console.log(`7 is also a cool number!`);
// } else {
//     console.log('Number is not 23 or 7 :(')
// }


// if (favourite !== 23) console.log('Why not 23?');

// ####################### Practice Assignment: #######################
/*
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
*/

// const numNeighbours = Number(prompt ('How many neighbour countries does your country have?'));
// console.log(numNeighbours);

/*
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
*/

// if (numNeighbours == 1) console.log(`Only 1 border!`);

/*
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
*/

// if (numNeighbours === 1) {
//     console.log(`Only 1 border!`);
// } else if  (numNeighbours > 1) {
//     console.log(`More than 1 border`)
// }

/*
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
*/

// else {
//     console.log('No Borders!');
// }

/*
5. Test the code with different values of 'numNeighbours', including 1 and 0.
*/



/*
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
*/

/*
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
*/

/*
8. Reflect on why we should use the === operator and type conversion in this
situation
*/

// it is best to use the === operator because the answer requires a return of an integer / number. We don't 
// necessarily need a string as an answer. Also helps us prevent bugs.

// ####################### Boolean Logic #######################

// AND ( && ) and OR ( || ) operators

// AND ( && ) operator will only return true if both statements are true.

// OR ( || ) operator will return true if either one of the statements are true.

// ####################### Logical Operators #######################

const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const isTired = false; // C

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense); // has NOT operator therefore it will return false 
// console.log(hasDriversLicense && hasGoodVision && isTired);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
if (shouldDrive) {
    console.log(`Sarah is able to drive!`)
} else {
    console.log(`Someone else should drive...`)
}

// ####################### Practice Assignment: #######################

/*
1. Comment out the previous code so the prompt doesn't get in the way
*/

/*
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
*/
const speaksEnglish = true; // speaks English
const lessThatFifty = true; // less than 50 million people
const isIsland = false; // not an Island
/*
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
*/
const newCountry = speaksEnglish && lessThatFifty && !isIsland; // a country to live in
if (newCountry) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}
/*
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
*/

/*
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D)
*/

// 