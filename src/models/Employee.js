module.exports = (sequelize, DataTypes) => sequelize.define('Employee', {
  name: DataTypes.STRING,
  department: DataTypes.STRING,
  gender: DataTypes.STRING,
  address: DataTypes.STRING,
  phone: DataTypes.STRING,
}, {});
