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
  res.status(200).json({ result: sayHello(req.params.string) });
});

// Uppercase
stringsRouter.get('/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

// Lowercase
stringsRouter.get('/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

// First Characters
stringsRouter.get('/first-characters/:string', (req, res) => {
  if (req.query.length) {
    res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
  }
  res.status(200).json({ result: firstCharacter(req.params.string) });
});

module.exports = stringsRouter;
