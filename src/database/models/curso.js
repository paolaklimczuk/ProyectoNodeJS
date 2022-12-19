'use strict'
module.exports = (sequelize, DataTypes) => {

  let Curso = sequelize.define('curso', { // defino el modelo de la tabla curso
    id: {
      type: DataTypes.BIGINT, // tipo de dato
      autoIncrement: true, // autoincrementable
      primaryKey: true, // clave primaria 
      allowNull: false // no permitir nulo
    },
    nombre_curso: { // nombre de la columna
      type: DataTypes.STRING, // tipo de dato
      allowNull: false // no puede ser nulo
    },
    cantidad_horas: {
      type: DataTypes.INTEGER,
    },
    fecha_inicio: {
      type: DataTypes.DATE,
    },
    fecha_fin: {
      type: DataTypes.DATE,
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

  Curso.associate = models => {
    Curso.belongsTo(models.profesor)
    Curso.hasMany(models.curso_alumno)
  }
  
  return Curso
}