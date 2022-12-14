const Joi = require ('joi')

let crearProfesor = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    edad: Joi.number().optional(),
    email: Joi.string().optional(),    
}) 

module.exports = {
    crearProfesor
}