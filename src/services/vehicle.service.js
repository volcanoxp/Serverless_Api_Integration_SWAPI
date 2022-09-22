const Vehicle = require('../models/vehicle');
const swapiService = require('./swapi.service');

const create = async (data) => {
    const vehicle = await Vehicle.create(data)

    return vehicle;
}

const getAll = async () => {
    const vehicles = await Vehicle.scan().exec();
    
    return vehicles;
}

const getOneDynamoDB = async (id) => {
    const vehicle = await Vehicle.get(id)

    return vehicle;
}

const getOne = async (id) => {
    let vehicle = await getOneDynamoDB(id);
    
    if (!vehicle) {
        vehicle = await swapiService.getTranslateVehicle(id);
        
        await create({
            id,
            ...vehicle
        })
    }
    
    return vehicle;
}

module.exports = {
    create,
    getAll,
    getOne,
}
