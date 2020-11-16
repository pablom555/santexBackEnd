'use strict';

const express = require('express');
const { verifyCodeLeague } = require('./../middlewares/index');

// Llamamos al router
const api = express.Router();

// Cargamos el controlador
const leagueController = require('../controllers/league');

// Import League
api.get('/import-league/:leagueCode', verifyCodeLeague, leagueController.importLeague);

module.exports = api;