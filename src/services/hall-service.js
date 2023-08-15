const { LoggerConfig } = require('../config');
const {HallRepository} = require('../repositories');
const { AppError } = require('../utils');
const {StatusCodes} = require('http-status-codes');

const hallRepository = new HallRepository();

async function createHall(data){
    try {
        console.log(data)
        return await hallRepository.create(data);
    } catch (error) {
        throw new AppError('Server not able to create hall', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllHalls(){
    try {
        return await hallRepository.findAll();
    } catch (error) {
        LoggerConfig.error(error);
        throw error;
    }
}

async function updateHall(id,data){
    try {
        return await hallRepository.update(id,data);
    } catch (error) {
        LoggerConfig.error(error);
        throw error;
    }
}

async function deleteHall(id){
    try {
        return await hallRepository.delete(id);
    } catch (error) {
        LoggerConfig.error(error);
        throw error;
    }

}

async function addSeats(hallId,seats){
    try {
        return await hallRepository.addSeats(hallId,seats);
    }
    catch (error) {
        LoggerConfig.error(error);
        throw error;
    }
}

async function getSeats(hallId){
    try {
        return await hallRepository.getSeats(hallId);
    }
    catch (error) {
        LoggerConfig.error(error);
        throw error;
    }
}

module.exports = {
    createHall,
    getAllHalls,
    updateHall,
    deleteHall,
    addSeats,
    getSeats
}
