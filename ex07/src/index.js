var maxNumArray =[[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
var maxNumArray1 =[[4, 9, 1, 4], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]];
var maxNumArray2 =[[17, 23, 25, 12], [25, 7, 34, 48], [4, 10, 18, 21], [72, 3, 17, 10]];
function largestNumFromArr(arr) {
    maxNumArray = [...arr];
    var largestNumber = [0,0,0,0];
    for( i = 0; i < arr.length; i++) {
     for(j = 0; j < arr[i].length; j++) {
        if(arr[i][j] > largestNumber[i]) {         
            largestNumber[i] = arr[i][j];
         }
     }
  }
  return largestNumber;
 }


 console.log(largestNumFromArr(maxNumArray));
 console.log(largestNumFromArr(maxNumArray1));
 console.log(largestNumFromArr(maxNumArray2));
 module.exports = largestNumFromArr;