export class Estudiante {
  id?: number;
  cedula: string;
  nombre: string;
  apellido: string;
  asignatura: string;
  calificacion1: number;
  calificacion2: number;
  promedio: number;
  estado: string;

  constructor(
    cedula: string,
    nombre: string,
    apellido: string,
    asignatura: string,
    calificacion1: number,
    calificacion2: number,
    promedio: number,
    estado: string
  ) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.apellido = apellido;
    this.asignatura = asignatura;
    this.calificacion1 = calificacion1;
    this.calificacion2 = calificacion2;
    this.promedio = promedio;
    this.estado = estado;
  }
}
