const httpStatus = require('http-status');
const vehicleService = require('../services/vehicle.service');


const create = async (req, res, next) => {
    try {
        const result = await vehicleService.create(req.body);
    
        res.status(httpStatus.CREATED).json(result);
    } catch(error) {
        next(error)
    }
}

const getAll = async (req, res, next) => {
    try {
        const result = await vehicleService.getAll();
    
        res.json(result);
    } catch(error) {
        next(error)
    }
}

const getOne = async (req, res, next) => {
    try {
        const result = await vehicleService.getOne(req.params.id);
    
        res.json(result);
    } catch(error) {
        next(error)
    }
} 

module.exports = {
    create,
    getAll,
    getOne,
}

