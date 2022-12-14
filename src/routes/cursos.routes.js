// Rutas de los cursos

const router = require ("express").Router()
const cursoCotroller = require('../controllers/curso.controller')
const validate = require('../middlewares/validate')
const cursoScheme = require('../middlewares/schemes/curso.scheme')

router.get('/', cursoCotroller.listarTodos)
router.post('/', validate(cursoScheme.crearCurso),cursoCotroller.crear)

router.get('/:idCurso', cursoCotroller.listarPorCurso)

module.exports = router