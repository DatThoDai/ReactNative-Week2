// 50. Create a function that will receive n as argument and return an array of n
// Viết hàm nhận vào số n, trả về mảng gồm n phần tử từ 1 đến n

function arrayFrom1ToN(n) {
    return Array.from({ length: n }, (_, i) => i + 1);
}
//Array.from({ length: n }, (_, i) => i + 1); tạo ra một mảng mới với độ dài n, mỗi phần tử trong mảng mới được tạo ra bởi hàm (_, i) => i + 1, với i chạy từ 0 đến n - 1
console.log(arrayFrom1ToN(5)); // [1, 2, 3, 4, 5]