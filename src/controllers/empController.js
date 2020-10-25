const employeeService = require('../service/empService');

exports.get = async (req, res, next) => {
  const employees = await employeeService.getEmployees();
  res.json(employees);
}

exports.create = async (req, res, next) => {
  const employee = await employeeService.createEmployee(req.body);
  res.json(employee);
}
