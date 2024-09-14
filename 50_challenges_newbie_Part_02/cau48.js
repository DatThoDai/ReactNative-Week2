// 48. Create a function to return the longest word in a string
//Viết hàm trả về từ dài nhất trong một chuỗi
function longestWord(str) {
    return str.split(' ').reduce((acc, cur) => acc.length >= cur.length ? acc : cur, '');
}
console.log(longestWord('Web Development Tutorial')); // 'Development'