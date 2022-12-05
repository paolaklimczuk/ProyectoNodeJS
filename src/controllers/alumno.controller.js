// Controlador de alumnos

const models = require('../database/models/index')

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