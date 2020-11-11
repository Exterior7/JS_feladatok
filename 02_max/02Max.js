const intArr = [123, 534, 45667, 234, 23, 4, 19, 4];

function getMaxelementFromAnArray(arr) {
    let maxIndex = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
    }
}
console.log('Értéke:' + arr[maxIndex]);
console.log('Helye:' + (maxIndex + 1) );
}

getMaxelementFromAnArray(intArr);