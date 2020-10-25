const express = require('express');
const validate = require('express-validation');
const empCntrl = require('../controllers/empController');
const { createEmployee } = require('../validations');

const router = express.Router();

router.route('/')
  .get(empCntrl.get)
  .post(validate(createEmployee), empCntrl.create)

module.exports = router;
