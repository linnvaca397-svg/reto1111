import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  categoria: string;
  precio: number;
}

@Component({
  selector: 'app-reto2',
  styleUrl: './reto2.css',
  templateUrl: './reto2.html',
})
export class Reto2 {
  protected readonly productos: Producto[] = [
    { nombre: 'Audífonos', categoria: 'Tecnología', precio: 85000 },
    { nombre: 'Mochila', categoria: 'Accesorios', precio: 120000 },
    { nombre: 'Botella', categoria: 'Hogar', precio: 65000 },
    { nombre: 'Teclado', categoria: 'Tecnología', precio: 185000 },
    { nombre: 'Lámpara', categoria: 'Hogar', precio: 99000 },
  ];
}
