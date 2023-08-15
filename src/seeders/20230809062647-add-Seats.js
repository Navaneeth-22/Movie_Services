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
   await queryInterface.bulkInsert('Seats', [
      {
        "seatNumber": "A1",
        "seatType": "vvip",
        "row": "A",
        "columnNo": 1,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "A2",
        "seatType": "vvip",
        "row": "A",
        "columnNo": 2,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "A3",
        "seatType": "vvip",
        "row": "A",
        "columnNo": 3,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "A4",
        "seatType": "vvip",
        "row": "A",
        "columnNo": 4,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "A5",
        "seatType": "vvip",
        "row": "A",
        "columnNo": 5,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "A6",
        "seatType": "vvip",
        "row": "A",
        "columnNo": 6,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "A7",
        "seatType": "vvip",
        "row": "A",
        "columnNo": 7,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "A8",
        "seatType": "vvip",
        "row": "A",
        "columnNo": 8,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "A9",
        "seatType": "vvip",
        "row": "A",
        "columnNo": 9,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "A10",
        "seatType": "vvip",
        "row": "A",
        "columnNo": 10,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      // from B1 to B10 with seatType = premium
      {
        "seatNumber": "B1",
        "seatType": "premium",
        "row": "B",
        "columnNo": 1,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "B2",
        "seatType": "premium",
        "row": "B",
        "columnNo": 2,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "B3",
        "seatType": "premium",
        "row": "B",
        "columnNo": 3,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "B4",
        "seatType": "premium",
        "row": "B",
        "columnNo": 4,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "B5",
        "seatType": "premium",
        "row": "B",
        "columnNo": 5,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "B6",
        "seatType": "premium",
        "row": "B",
        "columnNo": 6,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "B7",
        "seatType": "premium",
        "row": "B",
        "columnNo": 7,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "B8",
        "seatType": "premium",
        "row": "B",
        "columnNo": 8,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "B9",
        "seatType": "premium",
        "row": "B",
        "columnNo": 9,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "B10",
        "seatType": "premium",
        "row": "B",
        "columnNo": 10,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      // from C1 to C10 with seatType = premium
      {
        "seatNumber": "C1",
        "seatType": "premium",
        "row": "C",
        "columnNo": 1,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "C2",
        "seatType": "premium",
        "row": "C",
        "columnNo": 2,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "C3",
        "seatType": "premium",
        "row": "C",
        "columnNo": 3,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "C4",
        "seatType": "premium",
        "row": "C",
        "columnNo": 4,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "C5",
        "seatType": "premium",
        "row": "C",
        "columnNo": 5,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "C6",
        "seatType": "premium",
        "row": "C",
        "columnNo": 6,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "C7",
        "seatType": "premium",
        "row": "C",
        "columnNo": 7,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "C8",
        "seatType": "premium",
        "row": "C",
        "columnNo": 8,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "C9",
        "seatType": "premium",
        "row": "C",
        "columnNo": 9,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "C10",
        "seatType": "premium",
        "row": "C",
        "columnNo": 10,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      // from D1 to D10 with seatType = premium
      {
        "seatNumber": "D1",
        "seatType": "premium",
        "row": "D",
        "columnNo": 1,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "D2",
        "seatType": "premium",
        "row": "D",
        "columnNo": 2,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "D3",
        "seatType": "premium",
        "row": "D",
        "columnNo": 3,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "D4",
        "seatType": "premium",
        "row": "D",
        "columnNo": 4,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "D5",
        "seatType": "premium",
        "row": "D",
        "columnNo": 5,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "D6",
        "seatType": "premium",
        "row": "D",
        "columnNo": 6,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "D7",
        "seatType": "premium",
        "row": "D",
        "columnNo": 7,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "D8",
        "seatType": "premium",
        "row": "D",
        "columnNo": 8,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "D9",
        "seatType": "premium",
        "row": "D",
        "columnNo": 9,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "D10",
        "seatType": "premium",
        "row": "D",
        "columnNo": 10,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      // from E1 to E10 with seatType = premium
      {
        "seatNumber": "E1",
        "seatType": "premium",
        "row": "E",
        "columnNo": 1,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "E2",
        "seatType": "premium",
        "row": "E",
        "columnNo": 2,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "E3",
        "seatType": "premium",
        "row": "E",
        "columnNo": 3,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "E4",
        "seatType": "premium",
        "row": "E",
        "columnNo": 4,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "E5",
        "seatType": "premium",
        "row": "E",
        "columnNo": 5,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "E6",
        "seatType": "premium",
        "row": "E",
        "columnNo": 6,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "E7",
        "seatType": "premium",
        "row": "E",
        "columnNo": 7,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "E8",
        "seatType": "premium",
        "row": "E",
        "columnNo": 8,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "E9",
        "seatType": "premium",
        "row": "E",
        "columnNo": 9,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "E10",
        "seatType": "premium",
        "row": "E",
        "columnNo": 10,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      // from F1 to F10 with seatType = premium
      {
        "seatNumber": "F1",
        "seatType": "premium",
        "row": "F",
        "columnNo": 1,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "F2",
        "seatType": "premium",
        "row": "F",
        "columnNo": 2,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "F3",
        "seatType": "premium",
        "row": "F",
        "columnNo": 3,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "F4",
        "seatType": "premium",
        "row": "F",
        "columnNo": 4,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "F5",
        "seatType": "premium",
        "row": "F",
        "columnNo": 5,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "F6",
        "seatType": "premium",
        "row": "F",
        "columnNo": 6,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "F7",
        "seatType": "premium",
        "row": "F",
        "columnNo": 7,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "F8",
        "seatType": "premium",
        "row": "F",
        "columnNo": 8,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "F9",
        "seatType": "premium",
        "row": "F",
        "columnNo": 9,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "F10",
        "seatType": "premium",
        "row": "F",
        "columnNo": 10,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      // from G1 to G10 with seatType = premium
      {
        "seatNumber": "G1",
        "seatType": "premium",
        "row": "G",
        "columnNo": 1,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "G2",
        "seatType": "premium",
        "row": "G",
        "columnNo": 2,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "G3",
        "seatType": "premium",
        "row": "G",
        "columnNo": 3,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "G4",
        "seatType": "premium",
        "row": "G",
        "columnNo": 4,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "G5",
        "seatType": "premium",
        "row": "G",
        "columnNo": 5,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "G6",
        "seatType": "premium",
        "row": "G",
        "columnNo": 6,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "G7",
        "seatType": "premium",
        "row": "G",
        "columnNo": 7,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "G8",
        "seatType": "premium",
        "row": "G",
        "columnNo": 8,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "G9",
        "seatType": "premium",
        "row": "G",
        "columnNo": 9,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "G10",
        "seatType": "premium",
        "row": "G",
        "columnNo": 10,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      // from H1 to H10 with seatType = premium
      {
        "seatNumber": "H1",
        "seatType": "premium",
        "row": "H",
        "columnNo": 1,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "H2",
        "seatType": "premium",
        "row": "H",
        "columnNo": 2,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "H3",
        "seatType": "premium",
        "row": "H",
        "columnNo": 3,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "H4",
        "seatType": "premium",
        "row": "H",
        "columnNo": 4,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "H5",
        "seatType": "premium",
        "row": "H",
        "columnNo": 5,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "H6",
        "seatType": "premium",
        "row": "H",
        "columnNo": 6,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "H7",
        "seatType": "premium",
        "row": "H",
        "columnNo": 7,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "H8",
        "seatType": "premium",
        "row": "H",
        "columnNo": 8,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "H9",
        "seatType": "premium",
        "row": "H",
        "columnNo": 9,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "H10",
        "seatType": "premium",
        "row": "H",
        "columnNo": 10,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      // from I1 to I10 with seatType = premium
      {
        "seatNumber": "I1",
        "seatType": "regular",
        "row": "I",
        "columnNo": 1,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "I2",
        "seatType": "regular",
        "row": "I",
        "columnNo": 2,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "I3",
        "seatType": "regular",
        "row": "I",
        "columnNo": 3,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "I4",
        "seatType": "regular",
        "row": "I",
        "columnNo": 4,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "I5",
        "seatType": "regular",
        "row": "I",
        "columnNo": 5,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "I6",
        "seatType": "regular",
        "row": "I",
        "columnNo": 6,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "I7",
        "seatType": "regular",
        "row": "I",
        "columnNo": 7,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "I8",
        "seatType": "regular",
        "row": "I",
        "columnNo": 8,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "I9",
        "seatType": "regular",
        "row": "I",
        "columnNo": 9,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "I10",
        "seatType": "regular",
        "row": "I",
        "columnNo": 10,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      // from J1 to J10 with seatType = regular
      {
        "seatNumber": "J1",
        "seatType": "regular",
        "row": "J",
        "columnNo": 1,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "J2",
        "seatType": "regular",
        "row": "J",
        "columnNo": 2,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "J3",
        "seatType": "regular",
        "row": "J",
        "columnNo": 3,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "J4",
        "seatType": "regular",
        "row": "J",
        "columnNo": 4,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "J5",
        "seatType": "regular",
        "row": "J",
        "columnNo": 5,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "J6",
        "seatType": "regular",
        "row": "J",
        "columnNo": 6,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "J7",
        "seatType": "regular",
        "row": "J",
        "columnNo": 7,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "J8",
        "seatType": "regular",
        "row": "J",
        "columnNo": 8,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "J9",
        "seatType": "regular",
        "row": "J",
        "columnNo": 9,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "J10",
        "seatType": "regular",
        "row": "J",
        "columnNo": 10,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      // from K1 to K10 with seatType = regular
      {
        "seatNumber": "K1",
        "seatType": "regular",
        "row": "K",
        "columnNo": 1,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "K2",
        "seatType": "regular",
        "row": "K",
        "columnNo": 2,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "K3",
        "seatType": "regular",
        "row": "K",
        "columnNo": 3,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "K4",
        "seatType": "regular",
        "row": "K",
        "columnNo": 4,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "K5",
        "seatType": "regular",
        "row": "K",
        "columnNo": 5,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "K6",
        "seatType": "regular",
        "row": "K",
        "columnNo": 6,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "K7",
        "seatType": "regular",
        "row": "K",
        "columnNo": 7,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "K8",
        "seatType": "regular",
        "row": "K",
        "columnNo": 8,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "K9",
        "seatType": "regular",
        "row": "K",
        "columnNo": 9,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "K10",
        "seatType": "regular",
        "row": "K",
        "columnNo": 10,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      // from L1 to L10 with seatType = regular
      {
        "seatNumber": "L1",
        "seatType": "regular",
        "row": "L",
        "columnNo": 1,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "L2",
        "seatType": "regular",
        "row": "L",
        "columnNo": 2,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "L3",
        "seatType": "regular",
        "row": "L",
        "columnNo": 3,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "L4",
        "seatType": "regular",
        "row": "L",
        "columnNo": 4,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "L5",
        "seatType": "regular",
        "row": "L",
        "columnNo": 5,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "L6",
        "seatType": "regular",
        "row": "L",
        "columnNo": 6,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "L7",
        "seatType": "regular",
        "row": "L",
        "columnNo": 7,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "L8",
        "seatType": "regular",
        "row": "L",
        "columnNo": 8,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "L9",
        "seatType": "regular",
        "row": "L",
        "columnNo": 9,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      {
        "seatNumber": "L10",
        "seatType": "regular",
        "row": "L",
        "columnNo": 10,
        'hallId' : 4,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
      },
      // from M1 to M10 with seatType = regular
      
    
  ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('Seats', null, {});
  }
};
