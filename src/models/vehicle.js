const dynamoose = require("dynamoose");
const { v4 } = require("uuid");

const vehicleSchema = new dynamoose.Schema({
    id: {
        type: String,
        default: v4(),
    },
    nombre: String,
    fabricante: String,
    costo_en_creditos: String,
    longitud: String,
    velocidad_atfmosferica_max: String,
    tripulacion: String,
    pasajeros: String,
    capacidad_carga: String,
    consumibles: String,
    clase_vehiculo: String,
    pilotos: {
        type: Array,
        schema: [String],
        default: [],
    },
    peliculas: {
        type: Array,
        schema: [String],
        default: [],
    },
    creado: {
        type: String,
        default: new Date().toISOString(),
    },
    editado: {
        type: String,
        default: new Date().toISOString(),
    },
    url: {
        type: String,
        default: "",
    },
});

const Vehicle = dynamoose.model("Vehicle", vehicleSchema);

new dynamoose.Table("VehicleTable", [Vehicle], {"initialize": true});

module.exports = Vehicle;