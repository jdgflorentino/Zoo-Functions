const { employees, species } = require('../data/zoo_data');

function getEmployee(obj) {
  const key = Object.keys(obj);
  if (key.includes('name')) {
    const employeeIdByName = employees.find((e) => e.firstName === obj.name || e.lastName === obj.name).id;
    if (employeeIdByName === undefined) throw new Error('Informações inválidas');
    return employeeIdByName;
  }
  const employeesId = employees.find((e) => e.id === obj.id).id;
  if (employeesId === undefined) throw new Error('Informações inválidas');
  return employeesId;
}

getEmployee({ id: 'Id inválido' });

function nameSpeciesByIds(...ids) {
  return ids.map((id) => species.find((element) => element.id === id).name);
}

function localSpeciesByIds(...ids) {
  return ids.map((id) => species.find((element) => element.id === id).location);
}

const full = employees.map((e) => ({ id: e.id,
  fullName: `${e.firstName} ${e.lastName}`,
  species: nameSpeciesByIds(...e.responsibleFor),
  locations: localSpeciesByIds(...e.responsibleFor) }));

function getEmployeesCoverage(obj) {
  if (!obj) {
    return full;
  }
  const id = getEmployee(obj);
  const objE = full.find((e) => e.id === id);
  return objE;
}

getEmployeesCoverage({ name: 'Spry' });

module.exports = getEmployeesCoverage;
