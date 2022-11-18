// Controlador de profesores

module.exports ={

    listarTodos: async (req, res) => {

        try {
            console.log('ejecutando listarPrueba')

            res.json({
                message: "Listo todos los profesores"
            })
        } catch (err) {
            console.log(err)
        }
    },

    crear: async (req, res) => {
        try {
            console.log('ejecutando crear')

            res.json({
                message: "Creo un profesor"
            })
        } catch (err) {
            console.log(err)
        }

    },

    listarPorProfesor: async (req, res) => {

        try {
            console.log('ejecutando listarPorProfesor: ' + req.params.idProfesor)

            res.json({
                message: "Recupero informacion de profesor: " + req.params.idProfesor
            })
        } catch (err) {
            console.log(err)
        }        

    },
    
}