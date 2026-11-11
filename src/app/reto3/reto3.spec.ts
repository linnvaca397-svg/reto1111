import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reto3 } from './reto3';

describe('Reto3', () => {
  let component: Reto3;
  let fixture: ComponentFixture<Reto3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reto3],
    }).compileComponents();

    fixture = TestBed.createComponent(Reto3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds three students with valid data', () => {
    for (let i = 1; i <= 3; i++) {
      component.nombre = `Estudiante ${i}`;
      component.programa = 'Sistemas';
      component.edad = 18 + i;
      component.registrar();
    }

    expect(component.estudiantes.length).toBe(3);
    expect(component.mensaje).toBe('');
  });

  it('shows a message and does not add incomplete or invalid data', () => {
    component.nombre = '   ';
    component.programa = 'Sistemas';
    component.edad = 20;
    component.registrar();

    expect(component.estudiantes.length).toBe(0);
    expect(component.mensaje).toBe('Completa todos los campos con datos válidos.');

    component.nombre = 'Ana';
    component.edad = 0;
    component.registrar();

    expect(component.estudiantes.length).toBe(0);
    expect(component.mensaje).toBe('Completa todos los campos con datos válidos.');
  });
});
