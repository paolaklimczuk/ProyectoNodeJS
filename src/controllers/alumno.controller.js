// Controlador de alumnos

const models = require('../database/models/index')
const error = require('../const/error')

module.exports ={

    listarTodos: async (req, res) => {

        const alumns = await models.alumno.findAll()

        res.json({
            success:true,
            data: {
                alumnos:alumns
            }

        })
    },

    crear: async (req, res) => {
        const alum = await models.alumno.create(req.body)
        const rel_alum_curso = models.curso_alumno.create({
            alumnoId : alum.id,
            cursoId : req.body.cursoId

        })
        
        res.json({
            success:true,
            data: {
                id:alum.id
            }
        })

    },

    listarPorAlumno: async (req, res, next) => {
        try {
            const alum = await models.alumno.findOne({
                where: {
                    id: req.params.idAlumno
                }                              
            })    
            if (!alum) return next(error.AumnoInexistente)
            

            res.json({
                success: true,
                data: {
                    alumno: alum
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    
}