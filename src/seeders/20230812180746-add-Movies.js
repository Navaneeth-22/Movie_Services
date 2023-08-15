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
    * name,
    * language,
    * rating,
    * duration,
    * director,
    * genre,
    * releasedDate,
    * poster,
    * createdAt,
    * updatedAt
    */
    await queryInterface.bulkInsert('Movies', [{
      name : "The Conjuring: The Devil Made Me Do It",
      language : "English",
      rating : 7.3,
      duration : 112,
      director : "Michael Chaves",
      genre : "Horror",
      releasedDate : "2023-08-01",
      poster : "https://image.tmdb.org/t/p/w500/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    // another movie
    {
      name: "Avatar",
      language: "English",
      rating: 7.8,
      duration: 162,
      director: "James Cameron",
      genre: "Action, Adventure, Science Fiction",
      releasedDate: "2023-08-02",
      poster: "https://image.tmdb.org/t/p/w500/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Pulp Fiction",
      language: "English",
      rating: 8.9,
      duration: 154,
      director: "Quentin Tarantino",
      genre: "Crime, Drama",
      releasedDate: "2023-08-03",
      poster: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Interstellar",
      language: "English",
      rating: 8.6,
      duration: 169,
      director: "Christopher Nolan",
      genre: "Adventure, Drama, Science Fiction",
      releasedDate: "2023-08-04",
      poster: "https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "The Godfather",
      language: "English",
      rating: 9.2,
      duration: 175,
      director: "Francis Ford Coppola",
      genre: "Crime, Drama",
      releasedDate: "2023-08-05",
      poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Forrest Gump",
      language: "English",
      rating: 8.8,
      duration: 142,
      director: "Robert Zemeckis",
      genre: "Comedy, Drama, Romance",
      releasedDate: "2023-08-10",
      poster: "https://image.tmdb.org/t/p/w500/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },

  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('Movies', null, {});
  }
};
