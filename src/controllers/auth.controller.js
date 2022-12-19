const error = require('../const/error')
const models = require('../database/models/index')
const bcrypt = require('bcryptjs')  
const signJWT = require('../middlewares/signJWT')
module.exports = {
    login: async (req, res, next) => {
        try {
        // verifico la existencia del alumno con el email
        const alumno= await models.alumno.findOne({
            where: {
                email: req.body.email
            }
        })

        var contraseniaCoincide= false
        if (alumno){ // existe el email del alumno
            contraseniaCoincide = bcrypt.compareSync(req.body.password,alumno.password)

        }

        if (!alumno || !contraseniaCoincide){
            return next (error.CredencialesInvalidas)
        }

        res.json({
            succes:true,
            data:{
                token: signJWT(alumno),
                id: alumno.id
            }
        })

        } catch (err) {
            return next(err)
        }

    },

    register: async (req, res, next) => {
        try {
            req.body.password = bcrypt.hashSync(req.body.password,10)
                const alum = await models.alumno.create(req.body)
                const rel_alum_curso = models.curso_alumno.create({
                    alumnoId : alum.id,
                    cursoId : req.body.cursoId
            })
            res.json({
                succes: true,
                data: {
                    id: alum.id
                }
            }
            )
        } catch (err) {
            return next(err)
        }
    }
}
