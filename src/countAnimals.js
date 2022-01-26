const data = require('../data/zoo_data');

function countAnimals(animal) {
  const allAnimals = data.species;
  if (!animal) {
    const quantAnimal = allAnimals.map((animals) => ({ [animals.name]: animals.residents.length }));
    return Object.assign(...quantAnimal);
  }
  const keys = Object.keys(animal);
  const values = Object.values(animal);
  const animalsName = (animals) => animals.name === values[0];
  if (keys.includes('sex')) {
    return allAnimals.find(animalsName).residents
      .filter((animals) => animals.sex === values[1]).length;
  }
  return allAnimals.find(animalsName).residents.length;
}

module.exports = countAnimals;
