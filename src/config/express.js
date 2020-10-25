const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes');
const { notFound, convertError } = require('../middleware/error');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/v1', routes);

app.use(notFound);

app.use(convertError);

module.exports = app;
