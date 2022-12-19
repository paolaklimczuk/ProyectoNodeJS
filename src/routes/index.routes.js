// conecta las rutas

const {Router} = require ('express')

const alumnoRoutes = require("./alumnos.routes")
const profesorRoutes = require("./profesores.routes")
const cursoRoutes = require("./cursos.routes")
const authRoutes = require ("./auth.routes")
const decodeJWT = require ("../middlewares/decodeJWT")

const rutas_init = () => {

    const router  = Router()

    router.use('/alumnos', decodeJWT, alumnoRoutes)
    router.use('/profesores', profesorRoutes)
    router.use('/cursos', cursoRoutes)

    return router

}

const rutas_auth = () => {
    const router = Router()
    router.use ("/auth", authRoutes)
    return router
}

module.exports = {rutas_init, rutas_auth}