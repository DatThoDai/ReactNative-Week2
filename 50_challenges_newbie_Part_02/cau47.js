// 47. Deep copy a jagged array with numbers or other arrays in a new array
//Sao chép mảng 2 chiều chứa số hoặc mảng khác vào mảng mới
function deepCopyJaggedArray(arr) {
    return JSON.parse(JSON.stringify(arr));
}

console.log(deepCopyJaggedArray([1, [2, [3, 4], 5]])); // [1, [2, [3, 4], 5]]