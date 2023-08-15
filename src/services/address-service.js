const {AddressRepository} = require('../repositories');
const {AppError} = require("../utils");
const {StatusCodes} = require('http-status-codes');

const addressRepository = new AddressRepository();

async function createAddress(data){
    try {
        const response = await addressRepository.create(data);
        return response;
    } catch (error) {
        throw new AppError('Server not able to create address', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAddress(id,data){
    try {
        const response = await addressRepository.update(id,data);
        return response;
    } catch (error) {
        throw new AppError('Server not able to update address', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = { 
    createAddress,
    updateAddress
}