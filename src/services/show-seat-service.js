const {ShowSeatRepository} = require('../repositories');
const { AppError } = require('../utils');
const {StatusCodes} = require('http-status-codes');
const showSeatRepository = new ShowSeatRepository();

async function createShowSeats(data){
    try {
        return await showSeatRepository.createShowSeats(data);
    } catch (error) {
        throw new AppError('Server not able to create show seat', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getShowSeatsFiltered(query){
    console.log(query)
    let customFilter = {};
    if(query.showId){
        customFilter.showId = +query.showId;
    }
    if(query.seatIds){
        customFilter.id = query.seatIds.map((id) => +id);
    }
    if(query.status){
        customFilter.status = query.status;
    }
    console.log(customFilter,"dkdkkdk")
    try {
        return await showSeatRepository.getShowSeatsFiltered(customFilter);
    } catch (error) {
        throw new AppError('Server not able to get show seats', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getShowSeats(showId){
    try {
        return await showSeatRepository.getShowSeats(showId);
    } catch (error) {
        throw new AppError('Server not able to get show seats', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateShowSeats(data){
    try {
        return await showSeatRepository.updateShowSeats(data);
    } catch (error) {
        throw new AppError('Server not able to update show seats', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createShowSeats,
    getShowSeats,
    updateShowSeats,
    getShowSeatsFiltered
}
