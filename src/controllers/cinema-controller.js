const {CinemaService} = require("../services");
const {LoggerConfig} = require("../config")
const {SuccessResponse,ErrorResponse} = require("../utils/common");
const {StatusCodes} = require("http-status-codes")

async function createCinema(req, res, next) {
    try {
        const response = await CinemaService.createCinema({
            name : req.body.name,
            branchCode : req.body.branchCode,
            cityId : req.body.cityId
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

async function getCinemas(req, res, next) {
    try {
        const response = await CinemaService.getCinemas();
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

async function deleteCinema(req, res, next) {
    try {
        const response = await CinemaService.deleteCinema(req.params.id);
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

async function addMovie(req, res, next) {
    try {
        const response = await CinemaService.addMovie(req.params.id,req.body.movieId);
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
    getCinemas,
    createCinema,
    deleteCinema,
    addMovie
}