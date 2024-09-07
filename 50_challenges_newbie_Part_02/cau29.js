// 29. Print the distance between the first 100 prime numbers
//In ra khoảng cách giữa 100 số nguyên tố đầu tiên
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

function distanceBetweenPrimes() {
    let primes = [];
    let num = 2;
    while (primes.length < 100) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes.map((val, i, arr) => val - arr[i - 1]).slice(1);
}

console.log(distanceBetweenPrimes()); // [1, 2, 2, 4, 2, 4, 2, 4, 6, 2, 6, 4, 2, 4, 6, 6, 2, 6, 4, 2, 6, 4, 6, 8, 4, 2, 4, 2, 4, 14, 4, 6, 2, 10, 2, 6, 6, 4, 6, 6, 2, 10, 2, 4, 2, 12, 12, 4, 2, 4, 6, 2, 10, 6, 6, 6, 2, 6, 4, 2, 10, 14, 4, 2, 4, 14, 6, 10, 2, 4, 6, 8, 6, 6, 4, 6, 8, 4, 8, 10, 2, 10, 2, 6, 4, 6, 8, 4, 2, 4, 12, 8, 4, 8, 4]