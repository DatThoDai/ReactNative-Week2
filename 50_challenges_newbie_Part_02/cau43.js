// 43. Create a function that will receive a bi-dimensional array as argument and a
// number and will extract as a unidimensional array the column specified by the
// number
//Viết hàm nhận vào một mảng 2 chiều và một số, trả về mảng 1 chiều chứa các phần tử ở cột được chỉ định bởi số đó
function extractCol(arr, col) {
    return arr.map(row => row[col]);
}

console.log(extractCol([ ['a', 'b'], ['c', 'd'] ], 0)); // ['a', 'c']