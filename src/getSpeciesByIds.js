const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  console.log(...ids);
  return ids.map((id) => data.species.find((element) => element.id === id));
}

module.exports = getSpeciesByIds;
