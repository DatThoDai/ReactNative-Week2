// 49. Shuffle an array of strings
//Viết hàm trộn mảng các chuỗi
function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
console.log(shuffleArray(['a', 'b', 'c'])); // ['b', 'a', 'c']