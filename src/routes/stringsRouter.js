const express = require('express');

const stringsRouter = express.Router();

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

// Say Hello
stringsRouter.get('/hello/:string', (req, res) => {
  const { string } = req.params;

  res.status(200).json({ result: sayHello(string) });
});

// Uppercase
stringsRouter.get('/upper/:string', (req, res) => {
  const { string } = req.params;

  res.status(200).json({ result: uppercase(string) });
});

// Lowercase
stringsRouter.get('/lower/:string', (req, res) => {
  const { string } = req.params;

  res.status(200).json({ result: lowercase(string) });
});

// First Characters
stringsRouter.get('/first-characters/:string', (req, res) => {
  const { string } = req.params;
  const { length } = req.query;

  if (length > 0) {
    res.status(200).json({ result: firstCharacters(string, length) });
  }
  res.status(200).json({ result: firstCharacter(string) });
});

module.exports = stringsRouter;
