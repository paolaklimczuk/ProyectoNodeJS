'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: function (queryInterface, Sequelize) {
     return Promise.all([
      models.profesor.findOrCreate({
        where: {
          id: "20"
        },
        defaults:{
          nombre:"Rafael",
          apellido:"Iannicelli",
          email:"rafaeliannicelli@gmail.com",
          edad:"41"
      }
    }),

      models.profesor.findOrCreate({
        where: {
          id: "21"
        },
        defaults:{
          nombre:"Juan",
          apellido:"Gomez",
          email:"jg@gmail.com",
          edad: "45"
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

