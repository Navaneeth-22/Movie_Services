const CrudRepository = require('./crud-repository');
const {Movie} = require('../models');

class MovieRepository extends CrudRepository{
    constructor(){
        super(Movie);
    }

    async addCinema(movieId,cinemaId){
        try {
            const movie = await this.model.findByPk(movieId);
            const response = await movie.addCinema(cinemaId);
            return response;
        } catch (error) {
            throw error;
        }
    }





}

module.exports = MovieRepository;