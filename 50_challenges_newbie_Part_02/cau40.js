// 40. Implement the bubble sort algorithm for an array of numbers
// Thực hiện thuật toán sắp xếp nổi bọt cho mảng số

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

console.log(bubbleSort([1, 3, 2, 5, 4])); // [1, 2, 3, 4, 5]