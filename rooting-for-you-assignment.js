//Judge vegetables based on the highest metric, be it redness, plumpness or anything else.

const judgeVegetable = function (vegetables, metric) {

//Sort into vegetables in descending order, to find the highest metric value:
  vegetables.sort(function (a, b) {
    return b[metric] - a[metric];
  });
  return vegetables[0].submitter; //Return the value of the submitter with the highest metric.
};

//Arguments given:
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));
