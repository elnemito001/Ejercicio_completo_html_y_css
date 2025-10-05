import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  nombre = 'Nestor Moises Castillo Bautista';
  edad = 21;
  carrera = 'Ingeniería en Desarrollo de Software';
  semestre = '7mo Semestre';

  intereses = [
    'Programación',
    'Videojuegos',
    'Música',
    'Tecnología'
  ];
}
