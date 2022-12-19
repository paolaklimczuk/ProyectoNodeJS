'use strict';

const models = require('../models/index')
const bcrypt = require('bcryptjs')

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
          password: bcrypt.hashSync('pepe', 10),
          edad:40
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
          password: bcrypt.hashSync('pepe2', 10),     
          edad: 41
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
