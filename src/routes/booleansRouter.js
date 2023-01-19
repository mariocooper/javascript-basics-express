const express = require('express');

const booleansRouter = express.Router();

const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

module.exports = booleansRouter;
