// 28. Calculate the sum of first 100 prime numbers and return them in an array
//Tính tổng 100 số nguyên tố đầu tiên và trả về chúng trong một mảng
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

function sumFirst100Primes() {
    let primes = [];
    let num = 2;
    while (primes.length < 100) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes.reduce((acc, val) => acc + val);
}

console.log(sumFirst100Primes()); // 24133