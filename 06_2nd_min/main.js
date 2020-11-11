'use strict';

function bubbleSort(arr, nth) {
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
    return arr[nth - 1];
}



const intArr = [123, 534, 45667, 234, 23, 4, 19, 7];


console.log('Sorbarendezett tömb:'+ bubbleSort(intArr));
console.log('A tömb 2. legkisebb eleme:'+ bubbleSort(intArr, 1));
