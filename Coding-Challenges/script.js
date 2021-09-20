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

let markHeight = 1.69
let johnHeight = 1.95
let markWeight = 78
let johnWeight = 92

/*
2. Calculate both their BMIs using the formula (you can even implement both versions)
*/

const markBmiResult = markWeight / (markHeight ** 2) / (markHeight * markHeight);
// console.log(markBmiResult.toFixed(2));

const johnBmiResult = johnWeight / (johnHeight ** 2) / (johnHeight * johnHeight);
// console.log(johnBmiResult.toFixed(2));

/*
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
*/

const markHigherBMI = markBmiResult > johnBmiResult;

console.log('Task 3', markBmiResult.toFixed(2), johnBmiResult.toFixed(2), markHigherBMI); 


// Test Data:

// Data 1: Mark's weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// Data 2: Mark's weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


// Coding Challenge No. 2