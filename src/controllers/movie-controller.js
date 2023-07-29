const {MovieService} = require('../services');
const {SuccessResponse,ErrorResponse} = require("../utils/common");
const {StatusCodes} = require("http-status-codes")
async function getMovies(req, res, next) {
    try {
        const response = await MovieService.getMovies();
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

async function createMovie(req, res, next) {
    try {
        console.log(req.body);
        const dur = parseInt(req.body.duration);
        const response = await MovieService.createMovie({
            name : req.body.name,
            language : req.body.language,
            rating : req.body.rating,
            genre : req.body.genre,
            duration : req.body.duration,
            releasedDate : req.body.releasedDate,
            poster : req.body.poster,
            director : req.body.director
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

async function addCinema(req, res, next) {
    try {
        const response = await MovieService.addCinema(req.params.id,req.body.cinemaId);
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.ACCEPTED)
                .json(SuccessResponse);
    } catch (error) {
        console.log(error)
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
        
    }
}

module.exports = {
    getMovies,
    createMovie,
    addCinema
}