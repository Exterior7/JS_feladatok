// Írd ki (igen vagy nem), hogy egy tetszőlegese
//  elemszámú, csak egész számokat tartalmazó tömb 
//  tartalmazza-e a 23-as számot! 
//  Használj logaritmikus keresést! 

'use strict'

const numbers = [1, 42, 6, 8, 23, 56, 67, 36, 68, 24, 103, 2411, 23];

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


function logarithmicSearch(arr, search) {
    bubbleSort(arr);
    let B = 0;
    let E = arr.length - 1;
    let k = 0;

    while (B <= E) {
        k = parseInt((B + E) / 2, 10);
        if (arr[k] === search) {
            return k;
        } else if (arr[k] < search) {
            B = k + 1;
        } else {

            E = k - 1;
        }
    }
    return false;
}

console.log(logarithmicSearch(numbers, 56));


