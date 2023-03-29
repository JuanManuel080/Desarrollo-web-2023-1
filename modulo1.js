//Modulos en javascript

import {sumar} from './modulo2.js'

const saludar = (nombre,apellido) =>{
    return `Hola ${nombre} ${apellido}, cuenta con ${sumar(3,5)} vidas`;
}


console.log(saludar("juan","cardona"));