// 37. Create a function that will convert a string in an array containing the ASCII codes of each character
//Viết hàm chuyển đổi chuỗi thành mảng chứa mã ASCII của các ký tự

function asciiCodesArray(str) {
    return str.split('').map(char => char.charCodeAt(0));
}

console.log(asciiCodesArray('hello')); // [104, 101, 108, 108, 111]
