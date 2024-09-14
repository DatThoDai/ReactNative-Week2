// 38. Create a function that will convert an array containing ASCII codes in a string
//Viết hàm chuyển đổi mảng chứa mã ASCII thành chuỗi
function stringFromAsciiCodes(arr) {
    return arr.map(code => String.fromCharCode(code)).join('');
}

console.log(stringFromAsciiCodes([104, 101, 108, 108, 111])); // 'hello'
