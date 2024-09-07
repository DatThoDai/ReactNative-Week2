// 30. Create a function that will add two positive numbers of indefinite size. The numbers
// are received as strings and the result should be also provided as string.

function add(str1, str2) {
    let sum = ""; // store the result
    let str1Length = str1.length;
    let str2Length = str2.length;
    let carry = 0; // number that is carried to next decimal place, initially zero
    // pad the shorter string with zeros
    if (str1Length > str2Length) {
        str2 = str2.padStart(str1Length, 0);
    } else {
        str1 = str1.padStart(str2Length, 0);
    }
    // add from the last digit and move to the left
    for (let i = str1.length - 1; i >= 0; i--) {
        let digit1 = parseInt(str1[i]);
        let digit2 = parseInt(str2[i]);
        let partialSum = digit1 + digit2 + carry;
        if (partialSum >= 10) {
            carry = 1;
            partialSum -= 10;
        } else {
            carry = 0;
        }
        sum = partialSum.toString() + sum;
    }
    if (carry) {
        sum = carry + sum;
    }
    return sum;
}

console.log(add("290", "123")); // "413"