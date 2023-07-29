const CrudRepository = require('./crud-repository');
const {Cinema} = require('../models');

class CinemaRepository extends CrudRepository{
    constructor(){
        super(Cinema);
    }
    async addMovie(cinemaId,movieId){
        try {
            const cinema = await this.model.findByPk(cinemaId);
            const response = await cinema.addMovie(movieId);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CinemaRepository;