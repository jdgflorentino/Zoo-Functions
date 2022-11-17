const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employee = (nome) => nome.firstName === employeeName || nome.lastName === employeeName;
  // chamei uma funcao dentro do find pois a linha estava muito longa e foi o melhor jeito de verificar os nomes.
  const employeeFind = data.employees.find(employee);
  return employeeFind === undefined ? {} : employeeFind;
}

module.exports = getEmployeeByName;
