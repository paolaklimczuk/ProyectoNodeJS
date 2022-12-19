module.exports = {
 'ValidationError': {
    code:1000,
    message: "Error de Validacion"
 },
 'FaltanCampos': {
    code:1001,
    message: "Faltan Campos"
 },

  'AumnoInexistente': {
    code:1002,
    message: "El Alumno no existe en base"
 },

 'CredencialesInvalidas':{
   code:3000,
   message: 'email o passwrord invalidos'
},

'SesionExpirada' :{
   code:4000,
   message: 'Sesion expirada'
},

'AlumnoNoAutorizado' :{
   code:5000,
   message: 'Alumno No Autorizado'
}
 
}