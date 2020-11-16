'use strict';

const express = require('express');

const app = express();

app.use(require('./league'));

module.exports = app;