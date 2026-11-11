import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reto5 } from './reto5';

describe('Reto5', () => {
  let component: Reto5;
  let fixture: ComponentFixture<Reto5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reto5],
    }).compileComponents();

    fixture = TestBed.createComponent(Reto5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds products and calculates their total value', () => {
    component.nombre = 'Cuaderno';
    component.cantidad = 3;
    component.precio = 2500;
    component.agregarProducto();

    expect(component.productos).toEqual([
      { nombre: 'Cuaderno', cantidad: 3, precio: 2500 },
    ]);
    expect(component.productos[0].cantidad * component.productos[0].precio).toBe(7500);
    expect(component.mensaje).toBe('');
  });

  it('rejects negative values and allows removing products', () => {
    component.nombre = 'Lápiz';
    component.cantidad = -1;
    component.precio = 500;
    component.agregarProducto();
    expect(component.productos.length).toBe(0);

    component.cantidad = 2;
    component.precio = -500;
    component.agregarProducto();
    expect(component.productos.length).toBe(0);
    expect(component.mensaje).toBe('Ingresa un nombre, una cantidad válida y un precio válido.');

    component.cantidad = 2;
    component.precio = 500;
    component.agregarProducto();
    component.eliminarProducto(0);
    expect(component.productos.length).toBe(0);
  });
});
