// Rutas de los alumnos

const router = require ("express").Router()

const alumnoCotroller = require('../controllers/alumno.controller')

router.get('/', alumnoCotroller.listarTodos)
router.post('/', alumnoCotroller.crear)

router.get('/:idAlumno', alumnoCotroller.listarPorAlumno)

module.exports = router