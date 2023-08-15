const {ShowRepository} = require('../repositories');
const { AppError } = require('../utils');
const {StatusCodes} = require('http-status-codes');
const showRepository = new ShowRepository();

async function createShow(data){
    try {
        return await showRepository.createShow(data);
    } catch (error) {
        throw new AppError('Server not able to create show', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getShows(query){
    let customFilter = {};
    let sortFilter = [];
    if(query.city){
        customFilter.cityName = query.city;
    }
    if(query.cinema){
        customFilter.cinemaId = +query.cinema;
    }
    if(query.movie){
        customFilter.movieId = +query.movie;
    }
    if(query.showStatus){
        customFilter.showStatus = query.showStatus;
    }
    console.log(customFilter)
    try {
        const response = await showRepository.getShows(customFilter);
        return response;
    } catch (error) {
        throw new AppError('Server not able to get shows', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createShow,
    getShows
}