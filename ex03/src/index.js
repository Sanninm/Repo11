// Create an array here
myPetsArray = ["Dog", "Cat"];


// End of creating an array 
function myArrayFunction(myPets) {
    var myNewPats = [...myPets];
   // Only change code below this line 
   myNewPats.push("Bird", "Fish");
   var firstPet = myNewPats.shift();
   var lastPet = myNewPats.pop();
   myNewPats.unshift("Lion");
   return myNewPats;
   // Only change code above this line
   }
   console.log(myArrayFunction(myPetsArray));
   module.exports = myArrayFunction;