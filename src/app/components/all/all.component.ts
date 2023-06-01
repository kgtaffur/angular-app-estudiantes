import { Component, inject } from '@angular/core';
import { EstudianteService } from 'src/app/estudiantes.service';
import { Estudiante } from 'src/app/models/Estudiante';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent {
  estudianteService: EstudianteService = inject(EstudianteService);

  listEstudiante: Estudiante[] = [];
  promedioTotal = 0;

  constructor() {
    this.estudianteService
      .getAllStudents()
      .then((estudiantes: Estudiante[]) => {
        this.listEstudiante = estudiantes;
        this.allStudentsAverage();
      });
  }

  allStudentsAverage(): void {
    this.promedioTotal = parseFloat(
      (
        this.listEstudiante.reduce((acc: number, student: Estudiante) => {
          return acc + student.promedio;
        }, 0) / this.listEstudiante.length
      ).toFixed(2)
    );
  }
}
