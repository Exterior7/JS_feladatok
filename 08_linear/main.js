'use strict';
    const numbers = [1,42,6,8,23,56,67,36,68];



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


   
 function linearSearch(arr, search) {
     for (let i = 0; i < arr.length; i += 1) {
         if (arr[i] === search) {
            return 'igen';
         }
        }
        return 'nem';
 }



    console.log(bubbleSort(numbers));
    console.log(linearSearch(numbers, 23));
