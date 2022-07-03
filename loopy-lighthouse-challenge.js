let x = 100; //The starting point is 100.
while (x <= 200) { //The condition is x<=200, the loop will stop at 200.
  if (x % 3 === 0 && x % 4 === 0) { //If x is multiple of 3 and 4 both.
    console.log('LoopyLighthouse');
  } else if (x % 3 === 0) { //If x is a multiple of 3.
    console.log('Loopy');
  } else if (x % 4 === 0) { //If x is a multiple of 4.
    console.log('Lighthouse'); 
  } else {
    console.log(x); //If none of the above, just print the number.
  }
  x++; //The loop gets incremented by 1 at each step.
}