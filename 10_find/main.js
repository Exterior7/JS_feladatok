// Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú 
// elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, 
//     objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot!

'use strict';
   

   

    const numbers = [1,42,6,8,23,56,67,36,68,24, 103,2411,23];
    
    function FindTheDuplicateNumber(arr, search) {
       let count = 0;
        for (let i = 0; i < arr.length; i++ ) {
            if(arr[i] == search) {
                count++ ;
                
            }
        }
        return count;
    }

    // console.log(bubbleSort(numbers));
    console.log('Előfordulások száma =' + FindTheDuplicateNumber(numbers, 23));