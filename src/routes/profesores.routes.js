// Rutas de los profesores

const router = require ("express").Router()
const profesorCotroller = require('../controllers/profesor.controller')
const validate = require('../middlewares/validate')
const profesorScheme = require ('../middlewares/schemes/profesor.scheme')

router.get('/', profesorCotroller.listarTodos)
router.post('/', validate(profesorScheme.crearProfesor),profesorCotroller.crear)

router.get('/:idProfesor', profesorCotroller.listarPorProfesor)

module.exports = router