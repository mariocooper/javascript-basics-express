const express = require('express');

const arraysRouter = express.Router();

const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

// Element At Index
arraysRouter.post('/element-at-index/:index', (req, res) => {
  const { index } = req.params;
  const { array } = req.body;

  res.status(200).json({ result: getNthElement(index, array) });
});

// Array To String
arraysRouter.post('/to-string', (req, res) => {
  const { array } = req.body;

  res.status(200).json({ result: arrayToCSVString(array) });
});

// Add to Array
arraysRouter.post('/append', (req, res) => {
  const { value } = req.body;
  const { array } = req.body;

  res.status(200).json({ result: addToArray2(value, array) });
});

// Elements Starting With A Vowel
arraysRouter.post('/starts-with-vowel', (req, res) => {
  const { array } = req.body;

  res.status(200).json({ result: elementsStartingWithAVowel(array) });
});

// Remove Nth ELement
arraysRouter.post('/remove-element', (req, res) => {
  const index = parseInt(req.query.index, 10);
  const { array } = req.body;

  if (index > 0) {
    return res.status(200).json({ result: removeNthElement2(index, array) });
  }
  res.status(200).json({ result: removeNthElement2(0, array) });
});

module.exports = arraysRouter;
