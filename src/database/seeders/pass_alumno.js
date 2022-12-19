const models = require ('../models/index')
const bcrypt = require('bcryptjs')

module.exports = {
    up: function (queryInterface, Sequelize) {
      return Promise.all([
       models.alumno.findOrCreate({
         where: {
           id: "20"
         },
         defaults:{
           nombre:"Pujol",
           apellido:"Maria",
           email:"pm@gmail.com",
           password: bcrypt.hashSync('pass', 10),
           edad:62
       }
     }),
 
       models.alumno.findOrCreate({
         where: {
           id: "21"
         },
         defaults:{
           nombre:"Leonardo",
           apellido:"Klimczuk",
           email:"lk@gmail.com",
           password: bcrypt.hashSync('pass2', 10),
           edad: 62
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
 