const Joi = require('joi');

const getVehicles = {
    query: Joi.object().keys({
        page: Joi.string().regex(/^\d+$/),
        search: Joi.string(),
    })
}

module.exports = {
    getVehicles
}