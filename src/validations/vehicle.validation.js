const Joi = require('joi');


const create = {
    body: Joi.object().keys({
        nombre: Joi.string().required(),
        fabricante: Joi.string().required(),
        costo_en_creditos: Joi.string().regex(/^\d+$/).required(),
        longitud: Joi.string().regex(/[+-]?([0-9]*[.])?[0-9]+/).required(),
        velocidad_atfmosferica_max: Joi.string(),
        tripulacion: Joi.string().regex(/^\d+$/).required(),
        pasajeros: Joi.string().regex(/^\d+$/).required(),
        capacidad_carga: Joi.string().regex(/^\d+$/).required(),
        consumibles: Joi.string(),
        clase_vehiculo: Joi.string().required(),
        pilotos: Joi.array(),
        peliculas: Joi.array(),
        url: Joi.string().empty(''),
    })
}

const getOne = {
    params: Joi.object().keys({
        id: [
            Joi.string().regex(/^\d+$/).required(),
            Joi.string().guid({
                version: [
                    'uuidv4'
                ]
            }).required()
        ],
    })
}

module.exports = {
    create,
    getOne,
}