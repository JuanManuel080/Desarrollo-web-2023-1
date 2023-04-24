export class Trabajador{
    constructor(nombre,apellido,edad,documento,sueldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.documento = documento;
        this.sueldo = sueldo;
    }
}

export class Doctor extends Trabajador{
    constructor(nombre,apellido,edad,documento,sueldo, areaTrabajo, especialidad, experiencia, ganancia){
        super(nombre,apellido,edad,documento,sueldo)
        this.areaTrabajo = areaTrabajo;
        this.especialidad = especialidad;
        this.experiencia = experiencia;
        this.ganancia = ganancia;
    }

    calcularSalario(ganancia,sueldo){
        return (parseInt(ganancia)/100) * sueldo 
    }
}


export const Paciente = {
    motivoConsulta: 'Pediatria',
    enfermedades: 'Alergia',
    consultorio: 'd1',

    infoPersonal: {
        nombre: 'Camilo',
        edad: '3',
        genero: 'Masculino',
        eps: 'No tinene'
    }    
}