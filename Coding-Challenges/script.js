// ####################### Coding Challenge No. 1 #######################
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
*/

// Your Tasks:
// Data 1

/*
1. Store Mark's and John's mass and height in variables
*/

const markHeight = 1.69
const johnHeight = 1.95
const markWeight = 78
const johnWeight = 92

/*
2. Calculate both their BMIs using the formula (you can even implement both versions)
*/

const markBmiResult = markWeight / markHeight ** 2
// console.log(markBmiResult.toFixed(2));

const johnBmiResult = johnWeight / johnHeight ** 2
// console.log(johnBmiResult.toFixed(2));

/*
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
*/

const markHigherBMI = markBmiResult > johnBmiResult;

// console.log('Task 3', markBmiResult.toFixed(2), johnBmiResult.toFixed(2), markHigherBMI); 


// Test Data:

// Data 1: Mark's weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// Data 2: Mark's weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


// ####################### Coding Challenge No. 2 #######################

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
*/

/*
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI 
is higher than John's!" or "John's BMI is higher than Mark's!"
*/

if (markBmiResult > johnBmiResult) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}


/*
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is
higher than John's (23.9)!"
*/

if (markBmiResult > johnBmiResult) {
    console.log(`Mark's BMI (${markBmiResult.toFixed(2)}) is higher than John's (${johnBmiResult.toFixed(2)})!`);
} else {
    console.log(`John's BMI (${johnBmiResult.toFixed(2)}) is higher than Mark's (${markBmiResult.toFixed(2)})!`);
}

//Hint: Use an if/else statement 😉

// ####################### Coding Challenge No. 3 #######################

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
The winner with the highest average score wins a trophy!
Your tasks:
*/

/*
1. Calculate the average score for each team, using the test data below.
*/

// Data 1
const dolphinsScore = ((96 + 108 + 89) / 3); // returns the average score
console.log(dolphinsScore.toFixed(2));

const koalaScore = ((88 + 91 + 110) / 3); // returns the average score
console.log(koalaScore.toFixed(2));

// Data 2
const dolphinsScore2 = ((97 + 112 + 101) / 3); // returns the average score
console.log(dolphinsScore2.toFixed(2));
const koalaScore2 = ((109 + 95 + 123) / 3); // returns the average score
console.log(koalaScore2.toFixed(2));

//Data 3
const dolphinsScore3 = ((97 + 112 + 101) / 3); // returns the average score
console.log(dolphinsScore3.toFixed(2));
const koalaScore3 = ((109 + 95 + 106) / 3); // returns the average score
console.log(koalaScore3.toFixed(2));
/*
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
*/
// Data 1
if (dolphinsScore > koalaScore){
    console.log('Team Dolphin Wins!');
} else if (koalaScore === dolphinsScore){
    console.log("It's a tie!")
} else {
    console.log('Team Koala Wins!');
} 

// Data 2
if (dolphinsScore2 > koalaScore2){
    console.log('Team Dolphin Wins!');
} else if (koalaScore2 === dolphinsScore2){
    console.log("It's a tie!")
} else {
    console.log('Team Koala Wins!');
} 

// Data 3 
if (dolphinsScore3 > koalaScore3){
    console.log('Team Dolphin Wins!');
} else if (koalaScore3 === dolphinsScore3){
    console.log("It's a tie!")
} else {
    console.log('Team Koala Wins!');
} 

/*
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule,a
team only wins if it has a higher score than the other team, and the same time 
a score of at least 100 points.
Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
*/ 


/*
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams 
have the same score and both have a score greater or equal 100 points. Otherwise, no team 
wins the trophy
*/

/*
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/


// ####################### Coding Challenge No. 4 #######################

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
*/

/*
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
*/

const bill = 430 // in dollars

console.log(`$ ${bill > 50 && bill <300 ? bill * .15 : bill * .20} for tip`);

/*
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
*/
const tip = bill > 50 && bill <300 ? bill * .15 : bill * .20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);


/*
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
*/

// ####################### Coding Challenge No. 5 #######################