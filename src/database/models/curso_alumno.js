'use strict'
const { HasMany } = require("sequelize")

 // para que no se pueda usar variables no definidas

module.exports = (sequelize, DataTypes) => {

  let Curso_Alumno = sequelize.define('curso_alumno', { // defino el modelo de la tabla curso_alumno
    id: {
      type: DataTypes.BIGINT, // tipo de dato
      autoIncrement: true, // autoincrementable
      primaryKey: true, // clave primaria 
      allowNull: false // no permitir nulo
    },    
    createdAt: { // fecha de creacion
      type: DataTypes.DATE, // tipo de dato
      field: 'created_at', // nombre de la columna
      defaultValue: DataTypes.NOW, // valor por defecto
      allowNull: false // no puede ser nulo
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    deletedAt: { // fecha de eliminacion
      type: DataTypes.DATE, // tipo de dato
      field: 'deleted_at' // nombre de la columna
    }
  }, {
    paranoid: true, // elimina los registros de forma logica
    freezeTableName: true, // no va a modificar el nombre de la tabla a plural
  })

  Curso_Alumno.associate = models => {
    Curso_Alumno.belongsTo(models.curso)
    Curso_Alumno.belongsTo(models.alumno)
  }

  return Curso_Alumno
}