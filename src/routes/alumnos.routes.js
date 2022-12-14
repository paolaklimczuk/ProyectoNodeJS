// Rutas de los alumnos

const router = require ("express").Router();
const alumnoCotroller = require('../controllers/alumno.controller')
const validate = require('../middlewares/validate')
const alumnoScheme = require('../middlewares/schemes/alumno.scheme')


router.post('/', validate(alumnoScheme.crearAlumno), alumnoCotroller.crear)
router.get('/', alumnoCotroller.listarTodos)
router.get('/:idAlumno', alumnoCotroller.listarPorAlumno)

module.exports = router;