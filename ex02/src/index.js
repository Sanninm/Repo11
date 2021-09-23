// Create an array here
temps = [
    monday = [31, 32, 19, 37],
    tuesday = [29, 27, 55, 36],
    wednesday = [17, 27, 42, 46],
    thursday = [29, 52, 21, 64],
    friday = [91, 27, 31, 61],
]
// End of creating an array 
function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];
   // Only change code below this line 
   for (var i=0; i<newTemps.lenght; i++) {
       for (var j=0; j<4; j++) {
           avg = arr[1][j] + arr[2][j++];
           
       }
       averageDayTemp.push(avg);
   }
   
   // Only change code above this line
   return averageDayTemp;
   }
   console.log(myArrayFunction(temps));
   module.exports = myArrayFunction;