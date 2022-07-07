//Return a sorted array after merging 2 arrays

const merge = function(arrayOne, arrayTwo) {
  const mergedArrays = arrayOne.concat(arrayTwo); //Merging both arrays.
  mergedArrays.sort(function(a, b) { //Sorting through the merged array ascending.
    return a - b
  });
  return mergedArrays;
};
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
