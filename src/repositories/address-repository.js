const CrudRepository = require('./crud-repository');
const {Address} = require('../models');

class AddressRepository extends CrudRepository{
    constructor(){
        super(Address);
    }
}

module.exports = AddressRepository;