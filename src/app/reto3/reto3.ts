import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Estudiante {
  nombre: string;
  programa: string;
  edad: number;
}

@Component({
  imports: [FormsModule],
  selector: 'app-reto3',
  styleUrl: './reto3.css',
  templateUrl: './reto3.html',
})
export class Reto3 {
  nombre = '';
  programa = '';
  edad: number | null = null;
  mensaje = '';
  estudiantes: Estudiante[] = [];

  registrar(): void {
    const nombre = this.nombre.trim();
    const programa = this.programa.trim();

    if (!nombre || !programa || this.edad === null || !Number.isInteger(this.edad) || this.edad <= 0) {
      this.mensaje = 'Completa todos los campos con datos válidos.';
      return;
    }

    this.estudiantes.push({ nombre, programa, edad: this.edad });
    this.nombre = '';
    this.programa = '';
    this.edad = null;
    this.mensaje = '';
  }
}
