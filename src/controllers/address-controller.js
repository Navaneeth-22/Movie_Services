const {AddressService} = require("../services");
const {LoggerConfig} = require("../config")
const {SuccessResponse,ErrorResponse} = require("../utils/common");
const {StatusCodes} = require("http-status-codes")

/*
    cinemaId,
    street,
    state,
    postal_code
 */
async function createAddress(req, res, next) {
    try {
        const response = await AddressService.createAddress({
            cinema_id : req.body.cinemaId,
            street : req.body.street,
            state : req.body.state,
            postal_code : req.body.postal_code
        });
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        console.log(error)
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function updateAddress(req, res, next) {
    try {
        const response = await AddressService.updateAddress({
            cinemaId : req.body.cinemaId,
            street : req.body.street,
            state : req.body.state,
            postal_code : req.body.postal_code
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

module.exports = {
    createAddress,
    updateAddress
}