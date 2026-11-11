import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reto1 } from './reto1';

describe('Reto1', () => {
  let component: Reto1;
  let fixture: ComponentFixture<Reto1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reto1],
    }).compileComponents();

    fixture = TestBed.createComponent(Reto1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
