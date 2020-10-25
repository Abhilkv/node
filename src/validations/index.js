const Joi = require('joi');

exports.createEmployee = {
  body: {
    name: Joi.string().max(128).required(),
    address: Joi.string().required(),
    gender: Joi.string().valid("male", "female").required(),
    department: Joi.string().valid("HR", "Engineering", "Administration").required(),
    email: Joi.string().email().required(),
  },
}
