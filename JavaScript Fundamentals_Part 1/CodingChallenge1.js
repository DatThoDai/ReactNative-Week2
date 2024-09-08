// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).


// 1. Store Mark's and John's mass and height in variables
const markMass = 78;
const markHeight = 1.69; 

const johnMass = 92; 
const johnHeight = 1.95; 

// 2. Calculate both their BMIs using the formula
const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
const markHigherBMI = markBMI > johnBMI;

// 4. Print the BMIs of Mark and John
console.log(`Mark's BMI: ${markBMI}`);
console.log(`John's BMI: ${johnBMI}`);

// 5. Print whether Mark has a higher BMI than John
console.log(`Mark has a higher BMI than John: ${markHigherBMI}`);

