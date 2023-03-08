console.log('Hola mundo');//imprimir en consola

console.log(Math.random());

let edad; //declaracion de variables (Recibe cualquier tipo de valor)
let age = 20;
let mensaje = "Hola ususarios (Variable)";
let mensaje2 = "Mensaje 2";
let mensaje3 = "20";
let ban = true;
let verdadero = null;

console.log(mensaje +" "+ mensaje2);

console.log(age + mensaje3);

console.log(20 + age);

console.log(mensaje.length + ", Esta es la cantidad de caracteres del mensaje1");



const moneda = "COP";
const numeroColumnas = 4;
//numeroColumnas = 8; //Error, debido a que esta definida como const entonces no pueden cambiar

// funcion de toda la vida (No estandar)
function sumar(num1, num2) {
    return num1 + num2;
}

//funcion anonima
const hola = function(){
    return "Hola";
}


//funcion tipo flecha
const sum = (num1, num2) =>{
    return num1 + num2;
}

let resultado = sum(3,5);

console.log("El resultado de la suma con funcion flecha es:"+resultado);

const multiplicarPor2 = numero =>{ //No ponemos parentesis debido a que solo recibe un parametro
    return numero * 2;
}

const sinParams = ()=>{ //Si no recibe ningun parametro es necesario los parentesis 
    return "No tiene paramatero"
}

console.log("Producto de una funcion con un solo parametro = "+ multiplicarPor2(10));

console.log('funcion que ' + sinParams());

//arreglos

let numeros = [1,2,3,4,5,6];
let numeros2 = [];

numeros.push(7) //Adiciona un elemento

numeros.pop() //Saca el ultimo elemento

for (let i = 0; i < 10; i++) {
    numeros2[i] = Math.floor(Math.random() * 100) ;
    
}

for (let i = 0; i < numeros2.length; i++) {
    console.log(numeros2[i]);
}

//Funcion flecha 
let sumar2 = (number) =>{
    return number + 5;
}

//Asignar una funcion a una variable
let f = sumar2;

console.log(f(5));
console.log(sumar2(5));

/*Callback functions

    se trata de enviarle como parametro de entrada a una funcion otra funcion

*/

const esPar = (numero) =>{
    return numero%2 == 0; //Regresa un bool
}

const validarPar = (num,callbackFn) =>{
    const esPar = callbackFn(num);
    console.log("El numero es entero? R//"+esPar);
}

validarPar(3,esPar);

validarPar(4,esPar);

const dividePorDos = (num) =>{
    return num/2;
} 

const divideNum = (numero, callbackFn) =>{
    return callbackFn(numero);
}

console.log(divideNum(10,dividePorDos));
console.log(divideNum(11,dividePorDos));

//Metodos para arreglos
const numeros3 = [1, 2, 3, 4, 20, 90, 15];
let numeros4 = [1, 2, 3, 4, 20, 90, 15];

//.reduce
const sumarValores = numeros3.reduce((acumulador,valorActual) =>{
    return acumulador + valorActual; 
});

console.log(sumarValores);

console.log("\n");

//.forEach
const fnDos = numeros4.forEach(number =>{
    console.log(number);
});

console.log("\n");

//.filter
const fnTres = numeros3.filter( number => {
    //Como voy a filtrar
    return number > 10;
});

console.log(fnTres);
console.log("\n");


//.map
const nombresPersonas = ["Juan", "Pedro", "Pablo", "Andres"];

const anuncios = nombresPersonas.map( miembro => {
    return miembro +" Se unio al grupo";
})

console.log(anuncios);

//Ejercicio
//  Realizar una callbackfunction
//  Usar un metodo para los arreglos


let userArray = [];
let users;

const informacionUsuarios = (nombre, edad, documento) =>{
    userArray.push(
            users = {
                nombre: nombre,
                edad: edad,
                documento: documento
             }
    )
}

const addGenere = (nombre, edad , documento, callbackFn) =>{
    userArray.push(callbackFn(nombre, edad , documento),"F");
}

informacionUsuarios("Juan", 20, 1102834);
informacionUsuarios("Manuel", 18, 102495);
informacionUsuarios("Carlos", 24, 1005897);
informacionUsuarios("Juan Jose", 21, 010446);

const showUser = userArray.map( user => {
    if(user.edad > 18)
    return user;
})

console.log(showUser);
