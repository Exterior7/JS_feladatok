'use strict';

const arr = [4.1, 8, 9.8, 0, 3, 1.7, 2, 7.8,7,9, 6];




function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}







console.log(bubbleSort(arr));