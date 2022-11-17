const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employees) => employees.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    // fiz a variavel allEmployees pois a linha com o filter() estava com length > 100
    const allEmployees = data.employees;
    // eFilter = array com todas as infos dos employees geridos pelo manager passado como parametro.
    const eFilter = allEmployees.filter((employees) => employees.managers.includes(managerId));
    // callback para concatenar nome e sobrenome dos employees e map() retorna um array com a união dessas chaves.
    return eFilter.map((employees) => `${employees.firstName} ${employees.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
