const express = require('express');

const app = express();

const stringsRouter = require('./routes/stringsRouter');
const numbersRouter = require('./routes/numbersRouter');
const booleansRouter = require('./routes/booleansRouter');
const arraysRouter = require('./routes/arraysRouter');

app.use(express.json());
app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);
app.use('/booleans', booleansRouter);
app.use('/arrays', arraysRouter);

module.exports = app;
