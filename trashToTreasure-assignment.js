//Create a function to increase the garbage count for waste, recycling or compost depending on the trash submitted.

const smartGarbage = function(trash, bins) {
  if (trash === 'waste') {
    bins.waste += 1; //If trash is waste, add 1 in bins for waste.
  } else if (trash === 'recycling') {
    bins.recycling += 1; //If trash is recycling, add 1 in bins for recycling.
  } else if (trash === 'compost') {
    bins.compost += 1; //If trash is compost, add 1 in bins for compost.
  }
  return bins; //Return bins with the new values.
};
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

