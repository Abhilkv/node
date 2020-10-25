const { Employee } = require('../models');

exports.createEmployee = async ({ name, department, gender, address, phone }) => {
  return Employee.create({ name, department, gender, address, phone });
}

exports.getEmployees = async () => {
  return Employee.findAll({ where: {} });
}
