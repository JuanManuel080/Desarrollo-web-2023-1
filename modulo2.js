import { Doctor, Paciente } from "./modulo1.js";

const juan = new Doctor('Juan','Cardona', 29, 1234, 1000000, 'd1', 'Pediatria', 10, 5);
const Camilo = Paciente;
const citas = [];

// const crearDoctor = (nombre, apellido, edad, documento, salario, areaTrabajo,especialidad, experiencia, ganancia) => {
//     const newDoctor = new Doctor(nombre, apellido, edad, documento, salario, areaTrabajo, especialidad, experiencia, ganancia);
// }
const generarCita = (Paciente, Doctor) => {
    if (Paciente.motivoConsulta == Doctor.especialidad) {  
        const cita = {
            doctor: Doctor,
            paciente:  Paciente,
        }
        citas.push(cita);

        return cita
    }
    
   return 'No se pudo agendar la cita'
}


console.log(generarCita(Camilo, juan));
console.log(citas[0]);