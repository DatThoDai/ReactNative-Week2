// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
//Tạo một hàm sẽ nhận một mảng số làm đối số và sẽ trả về một mảng mới với các phần tử phân biệt
function distinctArray(arr) {
    return [...new Set(arr)];
}

console.log(distinctArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]