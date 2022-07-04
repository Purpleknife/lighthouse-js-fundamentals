//We want to know how many hundreds fit into a number, num in this case.

const howManyHundreds = function (num) {
  return Math.floor(num / 100); //We used Math.floor to round down the numbers, so we don't end up with decimals.
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);