import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Reto1 } from './reto1/reto1';
import { Reto2 } from './reto2/reto2';
import { Reto3 } from './reto3/reto3';
import { Reto4 } from './reto4/reto4';
import { Reto5 } from './reto5/reto5';

@Component({
  imports: [RouterOutlet, Reto1, Reto2, Reto3, Reto4, Reto5],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('reto1111');
}
