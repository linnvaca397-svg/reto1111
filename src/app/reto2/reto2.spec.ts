import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reto2 } from './reto2';

describe('Reto2', () => {
  let component: Reto2;
  let fixture: ComponentFixture<Reto2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reto2],
    }).compileComponents();

    fixture = TestBed.createComponent(Reto2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders five products and labels only prices over 100000', () => {
    fixture.detectChanges();
    const products = fixture.nativeElement.querySelectorAll('.producto');
    const costLabels = fixture.nativeElement.querySelectorAll('.producto__etiqueta') as NodeListOf<HTMLElement>;

    expect(products.length).toBe(5);
    expect(costLabels.length).toBe(2);
    expect(Array.from(costLabels).map((label) => label.textContent?.trim())).toEqual([
      'Producto costoso',
      'Producto costoso',
    ]);
  });
});
