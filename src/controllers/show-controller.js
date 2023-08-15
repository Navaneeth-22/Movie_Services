const {ShowService} = require('../services');
const {SuccessResponse,ErrorResponse} = require("../utils/common");
const {StatusCodes} = require("http-status-codes")

async function createShow(req, res, next) {
    try {
        const response = await ShowService.createShow({
            cinemaId : +req.body.cinemaId,
            movieId : +req.body.movieId,
            hallId : +req.body.hallId,
            cityName : req.body.cityName,
            showDate : req.body.showDate,
            start_time : req.body.start_time,
            end_time : req.body.end_time,
            showStatus : req.body.showStatus,
        });
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getShows(req, res, next) {
    try {
        const response = await ShowService.getShows(req.query);
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports = {
    createShow,
    getShows
}