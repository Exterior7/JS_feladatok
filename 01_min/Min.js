const intArr = [123, 534, 45667, 234, 23, 4, 19, 4];

function getMinelementFromAnArray(arr) {
    let minIndex = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
        minIndex = i;
    }
}
console.log('Értéke:' + arr[minIndex]);
console.log('Helye:' + (minIndex + 1) );
}

getMinelementFromAnArray(intArr);