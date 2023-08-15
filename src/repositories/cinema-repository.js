const CrudRepository = require('./crud-repository');
const {Cinema} = require('../models');
const {Address} = require('../models')
const { Op } = require('sequelize');

class CinemaRepository extends CrudRepository{
    constructor(){
        super(Cinema);
    }

    async addMovie(cinemaId,movieId){
        try {
            const cinema = this.model.findByPk(cinemaId);
            const response = await cinema.addMovie(movieId);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getCinemasByCity(cityId){
        try {
            const cinemas = await Cinema.findAll({
                where :{
                    cityId : {
                        [Op.eq] : +cityId
                    }
                },
                include : {
                    Address
                }
            })
            return cinemas
        } catch (error) {
            throw error
        }
    }

    async getCinemaById(id){
        try {
            const cinema = await Cinema.findByPk(id,{
                include : {
                    Address
                }
            });
            return cinema;
        } catch (error) {
            throw error;
        }
    }

    
}

module.exports = CinemaRepository;