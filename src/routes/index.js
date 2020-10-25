const express = require('express');
const empRoute = require('./empRoute');
const router = express.Router();

router.use('/employee', empRoute);

router.use('/status', (req, res, next) => {
  console.log('Received a status request');
  res.send('OK');
}, (req, res, next) => {
  console.log('Received a status request');
  res.send('OK');
});

module.exports = router;
