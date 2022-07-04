const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

//Good stations have a capacity of at least 20 and are either a school or a community centre.

const chooseStations = function (stations) {
  const goodStations=[]; //The var that holds the good stations stations that we want to show up in the end.
  for (const station of stations) {
    const capacity = station [1];
    
    if (capacity >= 20) {
      console.log(station[0]);

      const type = station[2];
      if (type === 'school' || type === 'community centre') {
        goodStations.push(station[0]); //Used push to add the elements we want to the end of the goodStations array.
      }
    }
  }
  return goodStations;
}

chooseStations(stations);