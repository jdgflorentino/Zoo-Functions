const { species } = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  // separar em partes
  // o que consigo fazer primeiro? 1 puxar o array com os dias quando o parametro for animal e fazer o Monday.

  const allAnimals = species.map((animal) => animal.name);
  if (allAnimals.includes(scheduleTarget)) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  }
  // preparar officeHour, preciso fazer template literals com os objetos de cada dia.
  // preparar exhibition filtrando os animais que estão no dia
  // const allDays = Object.keys(hours);
  // if (allDays.includes(scheduleTarget)) {
  //   return { scheduleTarget: { officeHour, exhibition } };
  // }
}
console.log(getSchedule('lions'));
module.exports = getSchedule;
