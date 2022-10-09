require('dotenv').config();
const { Router } = require('express');
const router = Router();

const rdogs = require('./rdogs.js')
const rtemperaments = require('./rtemperaments.js')

router.use('/dogs', rdogs)
router.use('/temperaments', rtemperaments)

module.exports = router;
