const {ShowSeatService} = require('../services');
const {SuccessResponse,ErrorResponse} = require("../utils/common");
const {StatusCodes} = require("http-status-codes")

async function createShowSeats(req, res, next) {
    try {
        const response = await ShowSeatService.createShowSeats({
            showId : +req.body.showId,
            hallId : +req.body.hallId,
            price : +req.body.price,
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

async function getShowSeatsFiltered(req, res, next) {
    try {
        console.log(req.query)
        const response = await ShowSeatService.getShowSeatsFiltered(req.query);
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

async function getShowSeats(req, res, next) {
    try {
        console.log(req.params)
        const response = await ShowSeatService.getShowSeats({
            showId : +req.params.showId,
        });
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

async function updateShowSeats(req, res, next) {
    try {
        console.log(req.query)
        const response = await ShowSeatService.updateShowSeats({
            showSeatIds : req.query.seatIds.map((id) => +id),
            status : req.query.status,
        });

        SuccessResponse.data = response;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        console.log("djjdjd",error)
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports = {
    createShowSeats,
    getShowSeats,
    updateShowSeats,
    getShowSeatsFiltered
}

