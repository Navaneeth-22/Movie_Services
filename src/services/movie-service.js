const {MovieRepository} = require('../repositories');
const {AppError} = require("../utils");
const {StatusCodes} = require('http-status-codes');
const movieRepository = new MovieRepository();

const {LoggerConfig} = require('../config');

async function createMovie(data){
    try {
        const response = await movieRepository.create(data);
        return response;
    } catch (error) {
        LoggerConfig.error(error);
        throw error;
    }
}

async function getAllMovies(){
    try {
        const response = await movieRepository.findAll();
        return response;
    } catch (error) {
        LoggerConfig.error(error);
        throw error;
    }
}

async function updateMovie(id,data){
    try {
        const response = await movieRepository.update(id,data);
        return response;
    } catch (error) {
        LoggerConfig.error(error);
        throw error;
    }
}

async function deleteMovie(id){
    try {
        const response = await movieRepository.delete(id);
        return response;
    } catch (error) {
        LoggerConfig.error(error);
        throw error;
    }
}

async function addCinema(movieId,cinemaId){
    try {
        const response = await movieRepository.addCinema(movieId,cinemaId);
        return response;
    } catch (error) {
        if(error.name == 'SequelizeUniqueConstraintError'){
            throw new AppError('Cinema already added', StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Server not able to add cinema', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createMovie,
    getAllMovies,
    updateMovie,
    deleteMovie,
    addCinema
}