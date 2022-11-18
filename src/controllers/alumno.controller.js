// Controlador de alumnos

module.exports ={

    listarTodos: async (req, res) => {

        try {
            console.log('ejecutando listarPrueba')

            res.json({
                message: "Listo todos los alumnos"
            })
        } catch (err) {
            console.log(err)
        }
    },

    crear: async (req, res) => {
        try {
            console.log('ejecutando crear')

            res.json({
                message: "Creo un alumno"
            })
        } catch (err) {
            console.log(err)
        }

    },

    listarPorAlumno: async (req, res) => {

        try {
            console.log('ejecutando listarPorAlumno: ' + req.params.idAlumno)

            res.json({
                message: "Recupero informacion de alumno: " + req.params.idAlumno
            })
        } catch (err) {
            console.log(err)
        }        

    },
    
}