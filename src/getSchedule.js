const { species, hours } = require('../data/zoo_data');

const allDays = Object.keys(hours);

const allAnimals = species.map((animal) => animal.name);

const frase = (day) => `Open from ${hours[day].open}am until ${hours[day].close}pm`;

const animais = (day) => species.filter((animal) => animal.availability.includes(day))
  .map((animal) => animal.name);

const obj = {};

const defaultTest = () => {
  allDays.forEach((day) => {
    obj[day] = {
      officeHour: frase(day),
      exhibition: animais(day) };
    if (day === 'Monday') {
      obj[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!' };
    }
  });
  return obj;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!' } };
  }

  if (allAnimals.includes(scheduleTarget)) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  }

  if (allDays.includes(scheduleTarget)) {
    return { [scheduleTarget]: { officeHour: frase(scheduleTarget),
      exhibition: animais(scheduleTarget) } };
  }

  return defaultTest();
}
console.log(getSchedule());
module.exports = getSchedule;
