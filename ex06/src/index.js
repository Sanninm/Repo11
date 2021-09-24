// Only change code below this line 
var Array1 = [
    [2], 
    [5,6,7], 
    [8,9]
];
var Array2 = [
    [2.5, 2], 
    [0.5,0.2], 
    [8]
];
var Array3 = [
    [1,2], 
    [3,4,5,6], 
    [7,8,9]
];

function multiplyArrayFunction(arr){
myArray = [...arr];
var result =  (0,0);
var sum = 0;
var product = 1;
for(i=0; i<myArray.length; i++) {
 for(j=0; j<myArray[i].lenght; j++) {
  result =( sum+=myArray[i][j],
   product*=myArray[i][j]);
 }
 
}
return result;
// Only change code above this line
}
console.log(multiplyArrayFunction(Array1));
console.log(multiplyArrayFunction(Array2));
console.log(multiplyArrayFunction(Array3));
module.exports = multiplyArrayFunction;