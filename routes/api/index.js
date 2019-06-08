const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const svgRouter = require('./svg');

router.use('/auth', usersRouter);
router.use('/svg', svgRouter);

module.exports = router;
