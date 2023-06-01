import { Injectable } from '@angular/core';
import { Estudiante } from './models/Estudiante';

@Injectable({
  providedIn: 'root',
})
export class EstudianteService {
  constructor() {}

  url = 'http://localhost:3000/estudiantes';

  async getAllStudents(): Promise<Estudiante[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async submitApplication(estudiante: Estudiante): Promise<void> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(estudiante),
    });
    return response.json();
  }

  async remove(estudiante: Estudiante): Promise<void> {
    const response = await fetch(`${this.url}/${estudiante.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(estudiante),
    });
    return response.json();
  }
}
