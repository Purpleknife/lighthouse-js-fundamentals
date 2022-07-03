const raining = true;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");



const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");



const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}


if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}


if (!raining) {
  console.log("Leave your umbrella at home!");
}

//"Conditionals - whichSchool" Challenge:
const whichSchool  = function (age) {
  //We are using if, else if and else statemets to determine which School to attend depending on age.
    if ( age < 13 ) {
      return 'Elementary School';
    } else if ( age >= 13 && age <= 18 ) {
      return 'Secondary School';
    } else {
      return 'Lighthouse Labs';
    }
  }
  console.log("I am 12. Which school should I go to?");
  console.log(whichSchool(12));