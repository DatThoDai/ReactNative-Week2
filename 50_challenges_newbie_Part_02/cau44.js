// 44. Create a function that will convert a string containing a binary number into a
// number
//Viết hàm chuyển đổi chuỗi nhị phân thành số
function binaryToNumber(binary) {
    return parseInt(binary, 2);
}

console.log(binaryToNumber('1101')); // 13