const CrudRepository = require('./crud-repository');
const {Hall} = require('../models');

class HallRepository extends CrudRepository{
    constructor(){
        super(Hall);
    }

    async addSeats(hallId,seats){
        try {
            const hall = await this.model.findByPk(hallId);
            // console.log("fjkfkf",seats)
            const response = await hall.createSeat(seats);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getSeats(hallId){
        try {
            const hall = await this.model.findByPk(hallId);
            const response = await hall.getSeats();
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getSeat(hallId,seatId){
        try {
            const hall = await this.model.findByPk(hallId);
            const response = await hall.getSeats({
                where : {
                    id : seatId
                }
            });
            return response;
        } catch (error) {
            throw error;
        }
    }

    async updateSeat(hallId,seatId,data){
        try {
            const hall = await this.model.findByPk(hallId);
            const response = await hall.updateSeats(data,{
                where : {
                    id : seatId
                }
            });
            return response;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = HallRepository;