const persona ={
    primernombre: "Juan",
    apellido: "Cardona",
    edad:19,
    documentoIdentidad: 5612,

    caracteristicas: {
        colorcabello: "Rojo",
        etnicidad: "Indio Europeo",
        idiomaMaterno: "Español"
    },

    saludar:function() {
        return `Hola ${this.primernombre} ${this.apellido}` 
    }
};

console.log(persona.saludar());


class Persona{

    constructor(primerNombreUsu, apellidoUsu){
        this.primerNombreUsu = primerNombreUsu;
        this.apellidoUsu = apellidoUsu;

    }

    saludarPersona() {
        return `Hola ${this.primerNombreUsu} ${this.apellidoUsu}`
    }
}

// No podemos modificar el objeto
const hombre = new Persona("Juan Manuel", "Cardona");
console.log(hombre);
console.log(hombre.saludarPersona());

// Con el et podemos modificar el objeto
let mujer = new Persona("Laura", "Alvarez");
console.log(mujer);
console.log(mujer.saludarPersona());

mujer.primerNombreUsu = "Isabel";
mujer.apellidoUsu = "Florez";

console.log(mujer);
console.log(mujer.saludarPersona());

// Herencia

class Animales{
    constructor (nombre, edad, sonido){
        this.nombre = nombre;
        this.edad = edad;
        this.sonido = sonido;
    }

    sonidoAnimal(){
        return `${this.nombre} tiene le sonido: ${this.sonido}`;
    }
}

class Gatos extends Animales{
    // Constructor de la clase Gatos
    constructor (nombre, edad, sonido, cazador){
        super(nombre, edad, sonido);
        this.cazador = cazador;
    }

    maullar(){
        return `yo puedo hacer el sonido ${this.sonido}`;
    }
}

// Crear un animal, especificamente un gato 

let gato = new Gatos("Bigotes", 5, "Miauuu", true)

console.log(gato);

/*  Tarea

    1. Crear un objeto que tenga minimo 2 metodos, ademas debe tener una propiedad que sea un objeto 
 
    2. crear una clase que herede de otra.
       debe poseer minimo 3 propiedades para el constructor.

    3. Crear una funcion tipo flecha que haga uso de la clase construida y el objeto declarado.
 */



    
// 2.
class PersonaUniversidad{

    constructor(nombre, documento, genero){
        this.nombre = nombre;
        this.documento = documento;
        this.genero = genero;
    }

    informacion(){
        return `Nombre:${this.nombre}` + `\n` 
                + `documento:${this.documento}` + `\n`
                + `genero:${this.genero}` + `\n`
    }
}

class Docente extends PersonaUniversidad{
    constructor(nombre, documento, genero, materia, bloque ){
        super(nombre, documento, genero)
        this.materia = materia;
        this.bloque = bloque;
    }

    informacion(){
        return super.informacion() + `materia:${this.materia}` + `\n`
               + `bloque:${this.materia}`
    }
}


class Estudiante extends PersonaUniversidad{
    constructor(nombre, documento, genero, grado, promedio ){
        super(nombre, documento, genero);
        this.grado = grado;
        this.promedio = promedio
    }

    informacion(){
        return super.informacion() + `grado:${this.grado}` + `\n`
               + `promedio:${this.promedio}`
    }
}
    

const JuanCardona = new Docente("JuanManuel", 11102, "M", "Calculo Diferencial", 12);

const CarlosCantor = new Estudiante("CarlosCantor",10204, "F", 11, 1.2);


console.log(JuanCardona.informacion());

console.log(CarlosCantor.informacion());