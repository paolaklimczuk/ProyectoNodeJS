// Controlador de cursos

const models = require('../database/models/index')

module.exports ={

    listarTodos: async (req, res) => {

        const curs = await models.curso.findAll()

        res.json({
            success:true,
            data: {
                cursos:curs
            }

        })
    },

    crear: async (req, res) => {
        const curs = await models.curso.create(req.body)
        
        res.json({
            success:true,
            data: {
                id:curs.id
            }
        })

    },

    listarPorCurso: async (req, res, next) => {
        try {
            const curs = await models.curso.findOne({
                where: {
                    id: req.params.idCurso
                }
            })            

            res.json({
                success: true,
                data: {
                    curso: curs
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    
}