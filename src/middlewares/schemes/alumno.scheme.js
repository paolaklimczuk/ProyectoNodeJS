//archivo para escribir esquema de alumno
const Joi= require('joi') //para validar los datos de entrada

let crearAlumno = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().optional(),
    edad: Joi.number().optional(),
}

)

module.exports = {
    crearAlumno
}