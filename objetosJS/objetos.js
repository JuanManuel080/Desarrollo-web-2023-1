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


// 1.
let JuanJo = {
    nombre: "Juan Jose",
    CC: 102040,
    direccion: "Bello",

    materia: {
        nombreMateria: "Ingles",
        codigoMateria: 78910,
    },

    nota: {
    },

    informacionEst:function(){
        return `Estudiante: ${this.nombre}` + `\n` +
        `C.C: ${this.CC}` + `\n` +
        `direccion: ${this.direccion}` + `\n`;
    },

    informacionMat:function(){
        return `Nombre de materia: ${this.materia.nombreMateria}` + `\n` +
        `Codigo de materia: ${this.materia.codigoMateria}` + `\n`;
    },  

    promedioNota:function(nota){
        let notaFinal = 2;
        for (let i = 0; i < nota.Length; i++) {
            if(i < nota.Length)
            notaFinal =  nota[i] + nota[i + 1];
        }
        notaFinal /= nota.Length;

        return notaFinal;
    }

};

console.log(JuanJo.informacionEst());
console.log(JuanJo.informacionMat());
console.log(`El promedio del estudiante ${JuanJo.nombre} en la materia ${JuanJo.materia.nombreMateria} es: ${JuanJo.promedioNota([5.0,3.5,4.8,5.0])}`);

    
// 2.
class universidad{

    constructor(nombre, direccion, codigo ){
        this.nombre = nombre;
        this.direccion = direccion;
        this.codigo = codigo;
    }

    informacion(){
        return `Nombre:${this.nombre}` + `\n` 
                + `Direccion:${this.direccion}` + `\n`
                + `Codigo:${this.codigo}` + `\n`
    }
}

class Docente extends universidad{
    constructor(nombre, direccion, codigo, genero, materia, bloque ){
        super(nombre, direccion, codigo);
        this.genero = genero;
        this.materia = materia;
        this.bloque = bloque;
    }

    informacion(){
        return super.informacion() + `genero:${this.genero}` + `\n`
               + `materia:${this.materia}` + `\n`+ `bloque:${this.bloque}` + `\n`
               
    }
}


class Estudiante extends universidad{
    constructor(nombre, direccion, codigo, genero, grado ){
        super(nombre, direccion, codigo);
        this.genero = genero;
        this.grado = grado;
    }

    informacion(){
        return super.informacion() + `Genero:${this.genero}` + `\n`
               + `Grado:${this.grado}`
    }
}
    

const JuanCardona = new Docente("JuanManuel", "Bello", 11102, "M", "Calculo Diferencial", 12);

const CarlosCantor = new Estudiante("CarlosCantor","Medellin", 10204, "F", 11);


console.log(JuanCardona.informacion());

console.log(CarlosCantor.informacion());



//3.

const newAcademy = (docente, estudiante) =>{
    const learnFrench = new universidad("NewFrench", "Itagui", 1234);
    return [learnFrench,docente,estudiante]
}


const Miguel = new Docente("Miguelito","Envigado", 473892, "F", "Calculo Diferencial", 12);


console.log(newAcademy(Miguel,JuanJo)[0].informacion());
console.log(newAcademy(Miguel,JuanJo)[1].informacion());
console.log(newAcademy(Miguel,JuanJo)[2].informacionEst());