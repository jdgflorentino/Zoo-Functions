const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const allEntrants = entrants.map((entrant) => entrant.age);
  const child = allEntrants.filter((c) => c < 18);
  const adult = allEntrants.filter((a) => a >= 18 && a < 50);
  const senior = allEntrants.filter((s) => s >= 50);
  const result = { adult: adult.length, child: child.length, senior: senior.length };
  return result;
}

function calculateEntry(entrants) {
  if (!entrants || !entrants.length) {
    return 0;
  }
  const visitors = countEntrants(entrants);
  console.log(visitors);
  const keys = Object.keys(visitors);
  console.log(keys);
  const total = keys.reduce((acum, key) => acum + visitors[key] * prices[key], 0);
  return total;
}

module.exports = { calculateEntry, countEntrants };
