const jwt = require('jsonwebtoken') //para crear el token
const globalsConstants= require('../const/globalsConstants')

module.exports = function(alumno) {
    if (alumno){
        //se crea el token del alumno
        const token = jwt.sign({
            id:alumno.id
        },
        globalsConstants.JWT_SECRET,{
            expiresIn:'3000m'
        }
        )
        return token  
    }else {
        return null 
    }
}