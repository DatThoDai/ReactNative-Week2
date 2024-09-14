// 33. Calculate the sum of numbers received in a comma delimited string
//Tính tổng các số nhận được trong một chuỗi được phân tách bằng dấu phẩy

function sumOfNumbersInString(str) {
    const numbers = str.split(',').map(Number);
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumOfNumbersInString('1,2,3,4,5'));
