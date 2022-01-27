const { species, hours } = require('../data/zoo_data');

const allDays = Object.keys(hours);
const allAnimals = species.map(({ name }) => name);

const frase = (day) => `Open from ${hours[day].open}am until ${hours[day].close}pm`;
const animais = (day) => species.filter(({ availability }) => availability.includes(day))
  .map(({ name }) => name);

const defaultTest = () => {
  const obj = {};
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
  if (allAnimals.includes(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }

  if (allDays.includes(scheduleTarget)) {
    return { [scheduleTarget]: defaultTest()[scheduleTarget] };
  }

  return defaultTest();
}
module.exports = getSchedule;
