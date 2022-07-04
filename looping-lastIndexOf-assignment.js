//Create a function that determines the last index of an iten in an array.

const lastIndexOf = function(array, value) {
  for (let i = array.length - 1; i >= 0; i--) { //Running a reverse loop to find the index of the last time value occurs in the array.
    if (array[i] === value) { //If value is one of the elements in array.
      return i; //i is the last index of value in array.
    }
  }
  return -1; //Result if value never occurs in array.
};

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);