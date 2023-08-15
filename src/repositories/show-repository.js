const CrudRepository = require('./crud-repository');
const {Show,Cinema,Movie,Address,Hall} = require('../models');
const { Op } = require('sequelize');

class ShowRepository extends CrudRepository{
    constructor (){
        super(Show);
    }

    async createShow(show){
        try{
            console.log(show)
            // const formattedStartTime = show.start_time.replace(' ', 'T'); // Convert space to 'T'
            // const formattedEndTime = show.end_time.replace(' ', 'T'); // Convert space to 'T'

            const startTime = new Date(show.start_time);
            const endTime = new Date(show.end_time);
            console.log(startTime,endTime)

            // const endTime = new Date(show.endTime);
            // we need to check if some show is already scheduled in this time
            const shows = await Show.findAll({
                where : {
                    cinemaId : {
                        [Op.eq] : show.cinemaId
                    },
                    hallId : {
                        [Op.eq] : show.hallId
                    },
                    [Op.or] : [
                        {
                            start_time : {
                                [Op.between] : [startTime,endTime]
                            }
                        },
                        {
                            end_time : {
                                [Op.between] : [startTime,endTime]
                            }
                        }
                    ],
                    showStatus : {
                        [Op.not] : "cancelled"
                    }
                }
            })
            console.log("hellop")
            if(shows.length > 0){
                throw new Error("There is already a show scheduled in this time")
            }
            const response = await this.create(show);
            
            console.log(response)
            return response;
        
        }
        catch(error){
            throw error;
        }
    }

    async getShowsByMovieId(movieId){
        try{
            const shows = await Show.findAll({
                where : {
                    movieId : {
                        [Op.eq] : movieId
                    }
                },
                include : {
                    Cinema : {
                        include : {
                            Address
                        }
                    },
                    Hall,
                }
            })
            return shows;
        }
        catch(error){
            throw error;
        }
    }


    async getShowsByCinemaId(cinemaId){
        try{
            const shows = await Show.findAll({
                where : {
                    cinemaId : {
                        [Op.eq] : cinemaId
                    }
                },
                include : {
                    Movie,
                    Hall
                }
            })
            return shows;
        }
        catch(error){
            throw error;
        }
    }

    async getShows(filter){
        console.log(filter)
        try{
            const shows = await Show.findAll({
                where : filter,
                include : [
                    {
                        model : Movie,
                        required : true,
                        
                    },
                    {
                        model : Cinema,
                        required : true,
                        // include : {
                        //     model : Address,
                        //     required : true
                        // }
                    },
                    {
                        model : Hall,
                        required : true
                    }
                ]
            })
            console.log(shows)
            return shows;
        }
        catch(error){
            throw error;
        }
    }

}

module.exports = ShowRepository;
