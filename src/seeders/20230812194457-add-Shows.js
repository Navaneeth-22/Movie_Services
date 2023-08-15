'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   /**
    * cinemaId,
    * hallId,
    * cityName,
    * movieId,
    * start_time,
    * end_time,
    * createdAt,
    * updatedAt
    * 
    */

    // await queryInterface.bulkInsert('Shows', [
    //   {
    //     cinemaId : 1,
    //     hallId : 1,
    //     cityName : "Mumbai",
    //     movieId : 1,
    //     start_time : new Date(),
    //     end_time : new Date(),
    //     createdAt : new Date(),
    //     updatedAt : new Date()
    //   },
    //   {
    //     cinemaId : 1,
    //     hallId : 1,
    //     cityName : "Mumbai",
    //     movieId : 1,
    //     start_time : new Date(),
    //     end_time : new Date(),
    //     createdAt : new Date(),
    //     updatedAt : new Date()
    //   },
    //   {
    //     cinemaId : 1,
    //     hallId : 1,
    //     cityName : "Mumbai",
    //     movieId : 1,
    //     start_time : new Date(),
    //     end_time : new Date(),
    //     createdAt : new Date(),
    //     updatedAt : new Date()
    //   },
    //   {
    //     cinemaId : 1,
    //     hallId : 1,
    //     cityName : "Mumbai",
    //     movieId : 1,
    //     start_time : new Date(),
    //     end_time : new Date(),
    //     createdAt : new Date(),
    //     updatedAt : new Date()
    //   },
    //   {
    //     cinemaId : 1,
    //     hallId : 1,
    //     cityName : "Mumbai",
    //     movieId : 1,
    //     start_time : new Date(),
    //     end_time : new Date(),
    //     createdAt : new Date(),
    //     updatedAt : new Date()
    //   },
    //   {
    //     cinemaId : 1,
    //     hallId : 1,
    //     cityName : "Mumbai",
    //     movieId : 1,
    //     start_time : new Date(),
    //     end_time : new Date(),
    //     createdAt : new Date(),
    //     updatedAt : new Date()
    //   },
    //   {
    //     cinemaId : 1,
    //     hallId : 1,
    //     cityName : "Mumbai",
    //     movieId : 1,
    //     start_time : new Date(),
    //     end_time : new Date(),
    //     createdAt : new Date(),
    //     updatedAt : new Date()
    //   },
    //   {
    //     cinemaId : 1,
    //     hallId : 1,
    //     cityName : "Mumbai",
    //     movieId : 1,
    //     start_time : new Date(),
    //     end_time : new Date(),
    //     createdAt : new Date(),
    //     updatedAt : new Date()
    //   },
    //   {
    //     cinemaId : 1,
    //     hallId : 1,
    //     cityName : "Mumbai",
    //     movieId
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
