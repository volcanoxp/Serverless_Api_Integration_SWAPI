const express = require('express');
const swapiController = require('../controllers/swapi.controller');
const validatorHandler = require('../middlewares/validator.handler');
const swapiValidator = require('../validations/swapi.validation');

const router = express.Router();

router.get('/vehicles', 
    validatorHandler(swapiValidator.getVehicles),
    swapiController.getVehicles
);


module.exports = router;