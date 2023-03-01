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

