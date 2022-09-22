const express = require('express');
const vehicleController = require('../controllers/vehicle.controller');
const validatorHandler = require('../middlewares/validator.handler');
const vehicleValidator = require('../validations/vehicle.validation');

const router = express.Router();

router.get('/', 
    vehicleController.getAll
);

router.post('/', 
    validatorHandler(vehicleValidator.create),
    vehicleController.create
);

router.get('/:id', 
    validatorHandler(vehicleValidator.getOne),
    vehicleController.getOne
);


module.exports = router;