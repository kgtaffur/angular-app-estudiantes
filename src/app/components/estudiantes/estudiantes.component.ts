import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from 'src/app/models/Estudiante';
import { EstudianteService } from 'src/app/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
})
export class EstudiantesComponent {
  cedula = '';
  nombre = '';
  apellido = '';
  asignatura = '';
  calificacion1 = '';
  calificacion2 = '';
  promedio = 0;
  estado = '';

  estudianteService: EstudianteService = inject(EstudianteService);

  listEstudiante: Estudiante[] = [];
  // listToShow: Estudiante[] = [];
  form: FormGroup;

  seleccionRadioButton = 'Todos';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      asignatura: ['', Validators.required],
      calificacion1: ['', Validators.required],
      calificacion2: ['', Validators.required],
    });

    this.estudianteService
      .getAllStudents()
      .then((estudiantes: Estudiante[]) => {
        this.listEstudiante = estudiantes;
        // this.listToShow = estudiantes;
      });
  }

  ngOnInit(): void {}
  agregarEstudiante(): void {
    const estudiante: Estudiante = {
      cedula: this.form.value.cedula,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      asignatura: this.form.value.asignatura,
      calificacion1: parseInt(this.form.value.calificacion1),
      calificacion2: parseInt(this.form.value.calificacion2),
      promedio: this.calcularPromedio(
        parseInt(this.form.value.calificacion1),
        parseInt(this.form.value.calificacion2)
      ),
      estado: this.verificarAprobado(),
    };

    this.estudianteService.submitApplication(estudiante);
    this.listEstudiante.push(estudiante);
    // this.filterAll();
    this.form.reset();
  }

  verificarAprobado(): string {
    return this.promedio >= 7 ? 'Aprobado' : 'Reprobado';
  }

  calcularPromedio(...calificaciones: number[]): number {
    let total = calificaciones.reduce((acc, value) => {
      return acc + value;
    }, 0);
    this.promedio = total / calificaciones.length;
    return this.promedio;
  }

  eliminarEstudiante(estudiante: Estudiante): void {
    this.estudianteService.remove(estudiante);
    this.listEstudiante = this.listEstudiante.filter((student: Estudiante) => {
      return student.id !== estudiante.id;
    });
    // this.filterAll();
  }

  // filterAll(): void {
  //   this.listToShow = this.listEstudiante.filter((student: Estudiante) => {
  //     return student.estado === 'Aprobado' || student.estado === 'Reprobado';
  //   });
  // }

  // filterAprobados(): void {
  //   this.listToShow = this.listEstudiante.filter((student: Estudiante) => {
  //     return student.estado === 'Aprobado';
  //   });
  // }

  // filterReprobados(): void {
  //   this.listToShow = this.listEstudiante.filter((student: Estudiante) => {
  //     return student.estado === 'Reprobado';
  //   });
  // }

  totalEstudiantes(): number {
    return this.listEstudiante.filter((student: Estudiante) => {
      return student.estado === 'Aprobado' || student.estado === 'Reprobado';
    }).length;
  }

  totalAprobados(): number {
    return this.listEstudiante.filter((student: Estudiante) => {
      return student.estado === 'Aprobado';
    }).length;
  }

  totalReprobados(): number {
    return this.listEstudiante.filter((student: Estudiante) => {
      return student.estado === 'Reprobado';
    }).length;
  }

  contadorEstudiantesButtonChange(seleccion: string): void {
    this.seleccionRadioButton = seleccion;
  }

  // actualizarEstudiante(estudiante: Estudiante, indice: number) {
  //   console.log(estudiante);
  //   this.listEstudiante[indice].estado = !estudiante.estado;
  // }
}
