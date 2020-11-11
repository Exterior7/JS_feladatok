const intArr = [123, 534, 45667, 234, 23, 4, 19, 20];

function getPairsNumbers(arr) {
    count = 0;
    for(let i = 0;i < arr.length; i++ )
        if(arr[i] % 2 == 0)
            count++;
    return count; 
    
}

console.log('Páros elemek száma:' + getPairsNumbers(intArr))


