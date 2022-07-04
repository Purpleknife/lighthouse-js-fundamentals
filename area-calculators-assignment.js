//Calculate the area of the 3 different shapes.
//Return undefined if any of the parameters are negative.

const calculateRectangleArea = function (length, width) {
  return (length < 0 || width < 0) ? undefined : length * width;
}

const calculateTriangleArea = function (base, height) {
  return (base < 0 || height < 0) ? undefined : (base * height) / 2;
}

const calculateCircleArea = function (radius) {
  return (radius < 0) ? undefined : Math.PI * Math.pow(radius,2);
}

console.log(calculateRectangleArea(10, 5)); 
console.log(calculateRectangleArea(1.5, 2.5));
console.log(calculateRectangleArea(10, -5));