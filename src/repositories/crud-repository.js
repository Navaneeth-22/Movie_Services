const {LoggerConfig} = require('../config');

class CrudRepository{
    constructor(model){
        this.model = model;
    }
    
    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            LoggerConfig.error(error);
            throw error;
        }
    }

    async findAll(){
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            LoggerConfig.error(error);
            throw error;
        }
    }

    async update(id,data){
        try {
            const response = await this.model.update(data,{
                where : {
                    id : id
                }
            })
            return response;
        } catch (error) {
            LoggerConfig.error(error);
            throw error;
        }
    }

    async delete(id){
        try {
            const response = await this.model.destroy({
                where : {
                    id : id
                }
            });
            return response;
        } catch (error) {
            LoggerConfig.error(error);
            throw error;
        }
    }
    
}

module.exports = CrudRepository