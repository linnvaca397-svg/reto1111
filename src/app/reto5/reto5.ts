import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Producto {
  nombre: string;
  cantidad: number;
  precio: number;
}

@Component({
  imports: [FormsModule],
  selector: 'app-reto5',
  styleUrl: './reto5.css',
  templateUrl: './reto5.html',
})
export class Reto5 {
  nombre = '';
  cantidad: number | null = null;
  precio: number | null = null;
  mensaje = '';
  productos: Producto[] = [];

  agregarProducto(): void {
    const nombre = this.nombre.trim();

    if (
      !nombre ||
      this.cantidad === null ||
      !Number.isInteger(this.cantidad) ||
      this.cantidad < 0 ||
      this.precio === null ||
      !Number.isFinite(this.precio) ||
      this.precio < 0
    ) {
      this.mensaje = 'Ingresa un nombre, una cantidad válida y un precio válido.';
      return;
    }

    this.productos.push({
      nombre,
      cantidad: this.cantidad,
      precio: this.precio,
    });
    this.nombre = '';
    this.cantidad = null;
    this.precio = null;
    this.mensaje = '';
  }

  eliminarProducto(indice: number): void {
    this.productos.splice(indice, 1);
  }
}
