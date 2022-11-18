// Rutas de los profesores

const router = require ("express").Router()

const profesorCotroller = require('../controllers/profesor.controller')

router.get('/', profesorCotroller.listarTodos)
router.post('/', profesorCotroller.crear)

router.get('/:idProfesor', profesorCotroller.listarPorProfesor)

module.exports = router