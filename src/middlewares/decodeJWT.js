const jwt = require('jsonwebtoken')
const error = require('../const/error')
const models = require('../database/models/index')
const moment = require('moment')
const globalsConstants= require ('../const/globalsConstants')

module.exports = async function (req, res, next) {

    if (req.header('Authorization') && req.header('Authorization').split(' ').length > 1) {
        try {
           
            let dataToken = jwt.verify(req.header('Authorization').split(' ')[1], globalsConstants.JWT_SECRET)

            if (dataToken.exp <= moment().unix())
                return next(errors.SesionExpirada) // Si el token expiró, devuelvo error

            res.locals.token = dataToken 

            const alumno = await models.alumno.findOne({
                where: {
                    id: dataToken.id
                }
            })
            if (!alumno) return next(error.AlumnoNoAutorizado)

            res.locals.alumno = alumno 

            next() // Si todo está bien, paso al siguiente middleware o controlador

        } catch (err) {
            return next(error.SesionExpirada)
        }

    } else {
        return next(error.AlumnoNoAutorizado)
    }

}

