// 34. Create a function that returns an array with words inside a text.
//Viết hàm trả về mảng chứa các từ trong một chuỗi

function wordsInText(text) {
    return text.split(' ');
}

console.log(wordsInText('hello world')); // ['hello', 'world']