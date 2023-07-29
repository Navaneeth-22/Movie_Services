const {LoggerConfig} = require('../config');
const {CityRepository} = require('../repositories');

const cityRepository = new CityRepository();



async function getCities(){
    try {
        const response = await cityRepository.findAll();
        return response;
    } catch (error) {
        LoggerConfig.error(error);
        throw error;
    }
}

async function createCity(data){
    try {
        const response = await cityRepository.create(data);
        return response;
    } catch (error) {
        LoggerConfig.error(error);
        throw error;
    }
}

async function updateCity(id,data){
    try {
        const response = await cityRepository.update(id,data);
        return response;
    } catch (error) {
        LoggerConfig.error(error);
        throw error;
    }
}

async function deleteCity(id){
    try {
        const response = await cityRepository.delete(id);
        return response;
    } catch (error) {
        LoggerConfig.error(error);
        throw error;
    }
}



module.exports = {
    getCities,
    createCity,
    updateCity,
    deleteCity
}

