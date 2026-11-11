import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-reto4',
  styleUrl: './reto4.css',
  templateUrl: './reto4.html',
})
export class Reto4 {
  color = '#cccccc';
  mensaje = 'Selecciona un color';

  cambiarColor(color: 'red' | 'yellow' | 'green'): void {
    this.color = color;

    switch (color) {
      case 'red':
        this.mensaje = 'Detenerse';
        break;
      case 'yellow':
        this.mensaje = 'Precaución';
        break;
      case 'green':
        this.mensaje = 'Avanzar';
        break;
    }
  }
}
