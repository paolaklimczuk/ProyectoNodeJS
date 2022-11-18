// Controlador de cursos

module.exports ={

    listarTodos: async (req, res) => {

        try {
            console.log('ejecutando listarPrueba')

            res.json({
                message: "Listo todos los cursos"
            })
        } catch (err) {
            console.log(err)
        }
    },

    crear: async (req, res) => {
        try {
            console.log('ejecutando crear')

            res.json({
                message: "Creo un curso"
            })
        } catch (err) {
            console.log(err)
        }

    },

    listarPorCurso: async (req, res) => {

        try {
            console.log('ejecutando listarPorCurso: ' + req.params.idCurso)

            res.json({
                message: "Recupero informacion de curso: " + req.params.idCurso
            })
        } catch (err) {
            console.log(err)
        }        

    },
    
}