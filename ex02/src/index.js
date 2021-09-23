// Create an array here
temps = [
    monday = [31, 32, 19, 37],
    tuesday = [29, 27, 55, 36],
    wednesday = [17, 27, 42, 46],
    thursday = [29, 52, 21, 64],
    friday = [91, 27, 31, 61]
]
// End of creating an array 
function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];
   // Only change code below this line 
   for (i=0; i<newTemps.length; i++) {
       var average = 0;
       var sum = 0;
       for (j=0; j<newTemps[i].length; j++) {
           sum+=temps[i][j];
        }
        average=sum/4
       averageDayTemp.push(average);
   }
   
   // Only change code above this line
   return averageDayTemp;
   }
   console.log(myArrayFunction(temps));
   module.exports = myArrayFunction;