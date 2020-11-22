 'use strict'

 const arr = [240, 1, 3, 4, 5, 7, 8, 10, 9, 21, 26];

function even() {
    let evenArray = [];
    
    for (let i = 0; i < arr.length; i += 1) {
            if (arr[i] % 2 == 0) {
                evenArray.push(arr[i]);
               } 
            
        }
        return evenArray;
    }

function odd() {
    
    let oddArray = [];
    for (let i = 0; i < arr.length; i += 1) {
            if (arr[i] % 2 !== 0) {
                oddArray.push(arr[i]);
               } 
            
        }
        return oddArray;
    }
    
  
   
   console.log(even(arr));
   console.log(odd(arr));
  
   

