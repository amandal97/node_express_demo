const express = require("express");
const router = express.Router();

const getData = require('./getData');

router.use('/getData.do', getData);

module.exports = router;