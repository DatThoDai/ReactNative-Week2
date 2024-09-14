// 45. Create a function to calculate the sum of all the numbers in a jagged array
// (contains numbers or other arrays of numbers on an unlimited number of
// levels)
//Viết hàm tính tổng tất cả các số trong mảng 2 chiều
function sumOfJaggedArray(arr) {
    return arr.flat(Infinity).reduce((acc, val) => acc + val, 0);
}
console.log(sumOfJaggedArray([1, [2, [3, 4], 5]])); // 15