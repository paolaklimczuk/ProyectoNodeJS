const Joi = require ('joi')

let crearCurso = Joi.object({
    nombre_curso: Joi.string().required(),
    cantidad_horas: Joi.number().optional(),
    fecha_inicio: Joi.date().optional(),
    fecha_fin: Joi.date().optional(),    
}) 

module.exports = {
    crearCurso
}