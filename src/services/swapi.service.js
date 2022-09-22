const axios = require('axios').default;
const boom = require('@hapi/boom');

const API_SWAPI = 'https://swapi.py4e.com/api';

const getVehicles = async (page=null, search=null) => {
    let params = {
        page: page || 1
    }

    if (search) {
        params.search = search;
    }
    
    const url = API_SWAPI + '/vehicles?' + new URLSearchParams(params);
    const response = await axios.get(url);

    return response.data;
}

const getVehicle = async (id) => {

    try {
        const url = API_SWAPI + `/vehicles/${id}`;
    
        const response = await axios.get(url);

        return response.data;
    } catch (err) {
        if (err.code === 'ERR_BAD_REQUEST'){
            throw boom.badRequest('Not exist vehicle');
        }
    }
}

const translateVehicleModel = (vehicle) => {
    return {
        nombre: vehicle.name,
        modelo: vehicle.model,
        fabricante: vehicle.manufacturer,
        costo_en_creditos: vehicle.cost_in_credits,
        longitud: vehicle.length,
        velocidad_atfmosferica_max: vehicle.max_atmosphering_speed,
        tripulacion: vehicle.crew,
        pasajeros: vehicle.passengers,
        capacidad_carga: vehicle.cargo_capacity,
        consumibles: vehicle.consumables,
        clase_vehiculo: vehicle.vehicle_class,
        pilotos: vehicle.pilots,
        peliculas: vehicle.films,
        creado: vehicle.created,
        editado: vehicle.edited,
        url: vehicle.url,
    }
}

const getTranslateVehicles = async (page=null, search=null) => {
    const vehicles = await getVehicles(page, search);

    const translateVehicles = vehicles.results.map(e => translateVehicleModel(e));

    return {
        cantidad: vehicles.count,
        siguiente: vehicles.next,
        anterior: vehicles.previous,
        resultado: translateVehicles,
    }
}

const getTranslateVehicle = async (id) => {
    const vehicle = await getVehicle(id);

    const translateVehicle = translateVehicleModel(vehicle);

    return translateVehicle;
}


module.exports = {
    getTranslateVehicles,
    getTranslateVehicle,
}