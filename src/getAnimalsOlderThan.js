const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // variável com os todos os residents.
  const animalFind = data.species.find((nomeAnimal) => nomeAnimal.name === animal).residents;
  // usei .every pois ele retorna boolean.
  return animalFind.every((element) => element.age >= age);
}
module.exports = getAnimalsOlderThan;
