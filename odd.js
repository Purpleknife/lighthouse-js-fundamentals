const isOdd = function (num) { //Defining the function isOdd and giving it num as a parameter.
  return num % 2 !== 0; //If num is odd, the "num % 2" shouldn't equal 0. 
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));