// Coding Challenge No. 1
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


// Coding Challenge No. 2

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

// Coding Challenge No. 3

