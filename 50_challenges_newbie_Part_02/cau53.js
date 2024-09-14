// 53. Calculate 70! with high precision (all digits)
// Tính 70! với độ chính xác cao (tất cả các chữ số)

function factorial(n) {
    let result = 1n;
    for (let i = 1n; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(70).toString());