// Controlador de profesor

const models = require('../database/models/index')

module.exports ={

    listarTodos: async (req, res) => {

        const prof = await models.profesor.findAll()

        res.json({
            success:true,
            data: {
                profesores:prof
            }

        })
    },

    crear: async (req, res) => {
        const prof = await models.profesor.create(req.body)
        
        res.json({
            success:true,
            data: {
                id:prof.id
            }
        })

    },


    listarPorProfesor: async (req, res, next) => {
        try {
            const prof = await models.profesor.findOne({
                where: {
                    id: req.params.idProfesor
                }
            })            

            res.json({
                success: true,
                data: {
                    profesor: prof
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    
}