const intArr = [3, 2, 3, 4, 5, 4, 4];



 function getAvgFromAnArry(arr) {
     console.log(getSumFromAnArry(arr) / arr.length);
 }

 function getSumFromAnArry(arr) {
     sum = 0;
     for(let i = 0;i < arr.length; i++ )
         sum += arr[i];
     return sum; 
 }

 getAvgFromAnArry(intArr);













