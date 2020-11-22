'use strict'

function bubbleSortAsc(arr) {
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
    } while (swapped);
    return arr;
  }

  function bubbleSortDesc(arr) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i += 1) {
        if (arr[i] < arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  }

const sample = [400, 563, 9, 30, 399, 67.22, 68, 600];

function custom13(arr) {
    const inputNumber = parseInt (prompt('Adj meg egy számot'),10);
    arr.push(inputNumber);
    const sortedArray = bubbleSortAsc(arr);
    // inputNumber = parseInt (inputNumber, 10);
    return sortedArray;
}

function getIndex(arr, value) {
    for (let i = 0; i < arr.length; i+=1) {
        if (arr[i] > value) {
            return i;
        }
    }
}

function custom13v2(arr) {
    let sortedArray = bubbleSortAsc(arr);
    const inputNumber = parseInt(prompt('Adj meg egy számot'), 10);
    if (!Number.isNaN(inputNumber)) {
        const index = getIndex(sortedArray, inputNumber);
        sortedArray.splice(index, 0, inputNumber);
    }
    return sortedArray;
}

// custom13(sample);
console.log(custom13v2(sample)); 