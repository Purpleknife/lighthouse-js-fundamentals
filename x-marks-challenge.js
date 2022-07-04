

//We're going to call our function with the following arguments:
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

//Define the finalPosition(moves) function that will calculate the position we want [x,y].
const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for (let move of moves) {
    if (move === 'north') {
      y += 1;
    } else if (move === 'south') {
      y -= 1;
    } else if (move === 'west') {
      x -= 1;
    } else if (move === 'east') {
      x += 1;
    }
  }
  return [x,y];
}
console.log(finalPosition(moves));