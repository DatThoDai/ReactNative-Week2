// 31. Create a function that will return the number of words in a text
// Tạo một hàm sẽ trả về số từ trong một văn bản
function countWords(str) {
    return str.split(" ").length;
}

console.log(countWords("I love to code everyday")); // 5
console.log(countWords("Coding is fun")); // 3