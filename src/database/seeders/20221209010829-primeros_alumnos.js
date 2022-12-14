'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: function (queryInterface, Sequelize) {
     return Promise.all([
      models.alumno.findOrCreate({
        where: {
          id: "10"
        },
        defaults:{
          nombre:"Paola",
          apellido:"Klimczuk",
          email:"polyklimczuk@gmail.com",
          edad:"40"
      }
    }),

      models.alumno.findOrCreate({
        where: {
          id: "11"
        },
        defaults:{
          nombre:"Valeria",
          apellido:"Klimczuk",
          email:"valeklimczuk@gmail.com",
          edad: "41"
        }
      })  
     ])   
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
