// conecta las rutas

const {Router} = require ('express')

const alumnoRoutes = require("./alumnos.routes")
const profesorRoutes = require("./profesores.routes")
const cursoRoutes = require("./cursos.routes")

const rutas_init = () => {

    const router  = Router()

    router.use('/alumnos', alumnoRoutes)
    router.use('/profesores', profesorRoutes)
    router.use('/cursos', cursoRoutes)

    return router

}

module.exports = {rutas_init}