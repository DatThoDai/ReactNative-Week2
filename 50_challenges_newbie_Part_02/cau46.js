// 46. Find the maximum number in a jagged array of numbers or array of numbers
//Tìm số lớn nhất trong mảng 2 chiều
function maxOfJaggedArray(arr) {
    return Math.max(...arr.flat(Infinity));
}

console.log(maxOfJaggedArray([1, [2, [3, 4], 5]])); // 5
