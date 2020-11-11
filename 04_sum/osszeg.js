const intArr = [123, 534, 45667, 234, 23, 4, 19];

function getSumFromAnArry(arr) {
    sum = 0;
    for(let i = 0;i < arr.length; i++ )
        sum += arr[i];
    return sum; 
    
}

console.log('Az elemek összege:' + getSumFromAnArry(intArr))



