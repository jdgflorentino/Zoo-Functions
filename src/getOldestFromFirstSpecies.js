const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeFind = data.employees.find((employee) => employee.id === id);
  const animalId = employeeFind.responsibleFor[0];
  // com o Id do primeiro animal fiz um sort em ordem decrescente e peguei a primeira posição do array dos residents.
  const oldestFFSpecies = data.species.find((animal) => animal.id === animalId)
    .residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(oldestFFSpecies);
}
module.exports = getOldestFromFirstSpecies;
