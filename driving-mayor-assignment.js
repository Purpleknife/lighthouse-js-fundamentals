//Create a function to monitor how often cars pass by, and track their speeds.

const carPassing = function (cars, speed) {
  let newCarsArray = {
    time: Date.now(),
    speed: speed
  };
  cars.push(newCarsArray); //Adding the new object to the cars array.
  return cars;
};

//Argumets given:
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38


console.log(carPassing(cars, speed));