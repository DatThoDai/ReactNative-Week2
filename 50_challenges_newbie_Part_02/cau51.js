// 51. Find the frequency of letters inside a string. Return the result as an array of
// arrays. Each subarray has 2 elements: letter and number of occurrences.
//Tìm tần suất xuất hiện của các ký tự trong chuỗi. Trả về kết quả dưới dạng mảng
function frequencyOfLetters(str) {
    const result = {};
    for (let char of str) {
        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return Object.entries(result);
}

console.log(frequencyOfLetters('hello')); // [['h', 1], ['e', 1], ['l', 2], ['o', 1]]