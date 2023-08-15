const CrudRepository = require('./crud-repository');
const {Show,Cinema,Movie,Address,Hall,Seat,Show_seats} = require('../models');
const { Op } = require('sequelize');
const db = require('../models');
const HallRepository = require('./hall-repository');
const hallRepository = new HallRepository();

class ShowSeatRepository extends CrudRepository{
    constructor (){
        super(Show_seats);
    }

    async createShowSeats(data){
        try{
            const seatsInHall = await hallRepository.getSeats(data.hallId);
            // now we have all the seats in the hall

            // create show seats for each seat in the hall
            const showSeats = [];
            seatsInHall.forEach(seat => {
                // if seat row is A then it is a vvip seat
                // if seat row is B to H then it is a premium seat
                // if seat row is I to L then it is a regualr seat
                const showSeat = {
                    showId : data.showId,
                    seatId : seat.id,
                    hallId : data.hallId,
                    seatStatus : "available",  
                    price : data.price,
                }
                if(seat.row == 'A'){
                    showSeat.price += 100;
                }
                else if(seat.row >= 'B' && seat.row <= 'H'){
                    showSeat.price += 50;
                }
                else{
                    showSeat.price += 0;
                }

                showSeats.push(showSeat);
            });

            const response = await this.model.bulkCreate(showSeats);
            return response;
        }
        catch(error){
            console.log(error)
            throw error;
        }
    }

    async getShowSeatsFiltered(filter){
        try{
            console.log("jjfj ",filter)
            const showSeats = await this.model.findAll({
                where : filter,
                // include seat Number
                include : {
                    model : Seat,
                    attributes : ['seatNumber']
                }
            })
            return showSeats;
        }
        catch(error){
            console.log(error)
            throw error;
        }
    }
                

    async getShowSeats(data){
        try{
            console.log(data.showId)
            const showSeats = await this.model.findAll({
                where : {
                    showId : {
                        [Op.eq] : data.showId
                    }
                },
                // include seat Number
                include : {
                    model : Seat,
                    attributes : ['seatNumber']
                }

            })
            // console.log(showSeats)
            return showSeats;
        }
        catch(error){
            console.log(error)
            throw error;
        }
    }
    
    async updateShowSeats(data){
        console.log("dmdmmddmmdmdmdm",data)
        const {showSeatIds,status} = data;
        const transaction = await db.sequelize.transaction();
        try{
            await db.sequelize.query('select * from show_seats where id in (:showSeatIds) for update', {
                replacements: { showSeatIds },
            });
            const response = await this.model.update({
                status : status
            },{
                where : {
                    id : {
                        [Op.in] : showSeatIds
                    }
                },
                transaction
            })
            await transaction.commit();
            return response;
            // throw new Error("Not implemented");
        }
        catch(error){
            await transaction.rollback();
            console.log(error)
            throw error;
        }
    }


}

module.exports = ShowSeatRepository;


