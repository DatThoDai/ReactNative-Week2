// 35. Create a function to convert a CSV text to a “bi-dimensional” array
//Viết hàm chuyển đổi một chuỗi CSV thành mảng 2 chiều

function csvToArray(csv) {
    return csv.split('\n').map(row => row.split(','));
}

console.log(csvToArray('a,b\nc,d')); // [['a', 'b'], ['c', 'd']]