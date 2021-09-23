// Create a monitorsListArry here
monitorsListArry = ["Apple", "Peach", "Berry"];

// End of monitorsListArry array 

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
   // Only change code below this line 
   var monitorList = [];

   for (var i = 0; i < 3; i++) {
    
       monitorList.push( [newMonitorsList[i], i+1]);
   
   }
   return monitorList;
   // Only change code above this line
   }
   
   console.log(myMonitorsFunction(monitorsListArry));
   module.exports = myMonitorsFunction;