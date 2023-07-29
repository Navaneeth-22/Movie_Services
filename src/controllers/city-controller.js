const {CityService} = require('../services');
const {SuccessResponse,ErrorResponse} = require("../utils/common");
const {StatusCodes} = require("http-status-codes")

async function getCities(req, res, next) {
    try {
        const response = await CityService.getCities();
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

async function createCity(req, res, next) {
    try {
        const response = await CityService.createCity({
            name : req.body.name,
            state : req.body.state
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

async function updateCity(req, res, next) {
    try {
        const response = await CityService.updateCity(req.params.id, req.body);
        res.send(response);
    } catch (error) {
        next(error);
    }
}



module.exports = {
    getCities,
    createCity,
    updateCity
}