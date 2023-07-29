const {LoggerConfig} = require('../config');
const {CinemaRepository} = require('../repositories');
const {AppError} = require("../utils");
const {StatusCodes} = require('http-status-codes');

const cinemaRepository = new CinemaRepository();


async function createCinema(data){
    try {
        const response = await cinemaRepository.create(data);
        return response;
    } catch (error) {
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Server not able to create city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllCinemas(){
    try {
        const response = await cinemaRepository.findAll();
        return response;
    } catch (error) {
        throw new AppError('Server not able to get cities', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCinema(id,data){
    try {
        const response = await cinemaRepository.update(id,data);
        return response;
    } catch (error) {
        throw new AppError('Server not able to update city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteCinema(id){
    try {
        const response = await cinemaRepository.delete(id);
        return response;
    } catch (error) {
        throw new AppError('Server not able to delete city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function addMovie(cinemaId,movieId){
    try {
        const response = await cinemaRepository.addMovie(cinemaId,movieId);
        return response;
    } catch (error) {
        if(error.name == 'SequelizeUniqueConstraintError'){
            throw new AppError('Cinema already added', StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Server not able to add cinema', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createCinema,
    getAllCinemas,
    updateCinema,
    deleteCinema,
    addMovie
}
