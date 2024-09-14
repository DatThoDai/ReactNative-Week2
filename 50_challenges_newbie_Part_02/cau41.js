// 41. Create a function to calculate the distance between two points defined by their x, y
// coordinates
//Viết hàm tính khoảng cách giữa 2 điểm có tọa độ (x, y)

function distanceBetweenTwoPoints(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

console.log(distanceBetweenTwoPoints(1, 1, 2, 2)); // 1.4142135623730951
