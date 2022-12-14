'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: function (queryInterface, Sequelize) {
     return Promise.all([
      models.curso.findOrCreate({
        where: {
          id: "5"
        },
        defaults:{
          nombre_curso:"Matematicas",
          cantidad_horas:"30",
          fecha_inicio:"2023-01-01",
          fecha_fin:"2023-02-01"
      }
    }),

      models.curso.findOrCreate({
        where: {
          id: "6"
        },
        defaults:{
          nombre_curso:"Sociales",
          cantidad_horas:"20",
          fecha_inicio:"2023-02-01",
          fecha_fin:"2023-02-01"
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