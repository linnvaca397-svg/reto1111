import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-reto1',
  styleUrl: './reto1.css',
  templateUrl: './reto1.html',
})
export class Reto1 {
  numero1: number | null = null;
  numero2: number | null = null;
  resultado: number | string = '';
  mensaje = '';

  sumar(): void {
    if (!this.validarNumeros()) return;
    this.resultado = this.numero1! + this.numero2!;
  }

  restar(): void {
    if (!this.validarNumeros()) return;
    this.resultado = this.numero1! - this.numero2!;
  }

  private validarNumeros(): boolean {
    if (this.numero1 === null || this.numero2 === null) {
      this.mensaje = 'Ingresa los dos números.';
      this.resultado = '';
      return false;
    }

    this.mensaje = '';
    return true;
  }
}
