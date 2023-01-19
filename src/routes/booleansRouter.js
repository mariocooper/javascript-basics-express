const express = require('express');

const booleansRouter = express.Router();

const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

// Negate
booleansRouter.post('/negate', (req, res) => {
  const { value } = req.body;

  res.status(200).json({ result: negate(value) });
});

// Truthiness
booleansRouter.post('/truthiness', (req, res) => {
  const { value } = req.body;

  res.status(200).json({ result: truthiness(value) });
});

// Is Odd
booleansRouter.get('/is-odd/:value', (req, res) => {
  const { value } = req.params;

  if (Number.isNaN(Number(value))) {
    return res.status(400).json({ error: 'Parameter must be a number.' });
  }
  res.status(200).json({ result: isOdd(value) });
});

// Starts With
booleansRouter.get('/:string/starts-with/:char', (req, res) => {
  const { char } = req.params;
  const { string } = req.params;

  if (char.length !== 1) {
    return res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).json({ result: startsWith(char, string) });
});

module.exports = booleansRouter;
