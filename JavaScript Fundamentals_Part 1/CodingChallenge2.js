// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1.  Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2.  Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 

// Calculate BMI for Mark
let markMass = 78; 
let markHeight = 1.69; 
let markBMI = markMass / (markHeight ** 2);

// Calculate BMI for John
let johnMass = 92; 
let johnHeight = 1.95; 
let johnBMI = johnMass / (johnHeight ** 2);

console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);

if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}
