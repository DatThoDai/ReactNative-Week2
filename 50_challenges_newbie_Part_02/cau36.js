// 36. Create a function that converts a string to an array of characters
//Viết hàm chuyển đổi chuỗi thành mảng các ký tự
function stringToArray(str) {
    return str.split('');
}

console.log(stringToArray('hello')); // ['h', 'e', 'l', 'l', 'o']