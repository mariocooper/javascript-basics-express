const express = require('express');

const numbersRouter = express.Router();

const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

// Add
numbersRouter.get('/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: add(a, b) });
});

// Subtract
numbersRouter.get('/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a, 0);
  const b = parseInt(req.params.b, 0);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: subtract(b, a) });
});

// Multiply
numbersRouter.post('/multiply', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  if (!a || !b) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(a, b) });
});

// Divide
numbersRouter.post('/divide', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  if (b === 0) {
    return res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (typeof a === 'undefined' || typeof b === 'undefined') {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: divide(a, b) });
});

// Remainder
numbersRouter.post('/remainder', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  if (b === 0) {
    return res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (typeof a === 'undefined' || typeof b === 'undefined') {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: remainder(a, b) });
});

module.exports = numbersRouter;
