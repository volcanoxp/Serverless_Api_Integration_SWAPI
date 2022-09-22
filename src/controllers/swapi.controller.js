const swapiService = require('../services/swapi.service');

const getVehicles = async (req, res, next) => {
    try {
        const result = await swapiService.getTranslateVehicles(req.query.page, req.query.search);
    
        res.json(result);
    } catch(error) {
        next(error)
    }
}

module.exports = {
    getVehicles,
}