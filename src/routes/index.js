const express = require('express');
const vehicleRoute = require('./vehicle.route');
const swapiRoute = require('./swapi.route');

const router = express.Router();

router.use('/vehicle', vehicleRoute);
router.use('/swapi', swapiRoute);

module.exports = router;