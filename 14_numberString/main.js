

const sample = [240, 234789, 'hali', 67, 'szia', 99, 'gali', 'csá', 100, 'szióka'];

function customSort(arr) {
    const numbers = [];
    const strings = [];
    const sortedArray = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (typeof arr[i] === 'number') {
        numbers.push(arr[i]);
      } else {
        strings.push(arr[i]);
      }
    }
    for (let i = 0; i < numbers.length; i += 1) {
      sortedArray.push(numbers[i]);
      sortedArray.push(strings[i]);
    }
    return sortedArray;
  }
  
  const result = customSort(sample);
  console.log(result);
  

  function getPrimitiveElementsByType(arr, type) {
    const typedArray = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (typeof arr[i] === type) {
        typedArray.push(arr[i]);
      }
    }
    return typedArray;
  }
  
  function mixArrays(arr1, arr2) {
    const mixedArray = [];
    for (let i = 0; i < arr1.length; i += 1) {
      mixedArray.push(arr1[i], arr2[i]);
    }
    return mixedArray;
  }
  
  const numbers = getPrimitiveElementsByType(sample, 'number');
  const strings = getPrimitiveElementsByType(sample, 'string');
  console.log(mixArrays(numbers, strings));
  