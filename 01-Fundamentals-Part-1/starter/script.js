
// Values and Variables

let js = 'amazing'

// let firstName = "Jonas"; // declared a variable called firstName and stored a value of a string name Jonas.

// Practice Assignment: 

// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)

let country = "United States Of America";
let continent = "North America";
let population = "333,352,517 as of Saturday, September 18, 2021"

// 2. Log their values to the console

// console.log(country); // returns "United States Of America"
// console.log(continent); // returns "North America"
// console.log(population); // returns "333,352,517 as of Saturday, September 18, 2021"

// 3. (Stretch) Create an object using key:value notation using these variables.

// Created an object containing the variables from line 12 - 14

let locationStatus = {
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

let isIsland = "Philippines";
let language;

/*
    2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/

// console.log(isIsland);
// console.log(population);
// console.log(language);

// let const and var // ES6 // var is the old way of declaring variable

let age = 30; // age can be changed
age = 31;

const birthYear = 1991; // birthYear can't be changed
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
let usaPopulation = 300000000; // USA has a population of 300,000,000 people.....
const halfOfPopulation = usaPopulation / 2;

// console.log(halfOfPopulation);

/*
2. Increase the population of your country by 1 and log the result to the console
*/

usaPopulation++; // increments the stored value inside usaPopulation by 1.

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

