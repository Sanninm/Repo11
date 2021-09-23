// Only change code below this line 
var test1 = [[2], [5,6,7], [8,9]];
var test2 = [[2.5, 2], [0.5,0.2], [8]];
var test3 = [[1,2], [3,4,5,6], [7,8,9]];

function multiplyArrayFunction(arr){
myArray = [...arr];
var rez= (sum, product);
var sum;
var product;
for(i=0; i < myArray.length; i++) {
 for(j=0; j < myArray[i].lenght; j++) {
 sum+=myArray[i]+[j];
 product+=myArray[i][j];
 }
 
}
return rez;
// Only change code above this line
}

console.log(multiplyArrayFunction(test1));
console.log(multiplyArrayFunction(test2));
console.log(multiplyArrayFunction(test3));
module.exports = multiplyArrayFunction; 