// 52. Calculate Fibonacci(500) with high precision (all digits)
// Tính Fibonacci(500) với độ chính xác cao (tất cả các chữ số)

function fibonacci(n) {
    let a = 1n, b = 0n, temp;
    while (n >= 0) {
        temp = a;
        a += b;
        b = temp;
        n--;
    }
    return b;
}

console.log(fibonacci(500).toString());