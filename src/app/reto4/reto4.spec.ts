import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reto4 } from './reto4';

describe('Reto4', () => {
  let component: Reto4;
  let fixture: ComponentFixture<Reto4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reto4],
    }).compileComponents();

    fixture = TestBed.createComponent(Reto4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updates the light and message for each button', () => {
    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    const circle = fixture.nativeElement.querySelector('.circulo') as HTMLElement;
    const message = fixture.nativeElement.querySelector('p') as HTMLElement;

    buttons[0].click();
    fixture.detectChanges();
    expect(circle.style.backgroundColor).toBe('red');
    expect(message.textContent?.trim()).toBe('Detenerse');

    buttons[1].click();
    fixture.detectChanges();
    expect(circle.style.backgroundColor).toBe('yellow');
    expect(message.textContent?.trim()).toBe('Precaución');

    buttons[2].click();
    fixture.detectChanges();
    expect(circle.style.backgroundColor).toBe('green');
    expect(message.textContent?.trim()).toBe('Avanzar');
  });
});
