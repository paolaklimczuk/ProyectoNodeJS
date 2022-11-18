// Rutas de los cursos

const router = require ("express").Router()

const cursoCotroller = require('../controllers/curso.controller')

router.get('/', cursoCotroller.listarTodos)
router.post('/', cursoCotroller.crear)

router.get('/:idCurso', cursoCotroller.listarPorCurso)

module.exports = router