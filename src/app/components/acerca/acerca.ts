import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css'
})
export class AcercaComponent {
  nombreProyecto = 'Sistema de Gestión de Usuarios';
  version = '1.0.0';
  fecha = 'Octubre 2025';

  tecnologias = [
    { nombre: 'Angular', descripcion: 'Framework principal' },
    { nombre: 'TypeScript', descripcion: 'Lenguaje de programación' },
    { nombre: 'HTML5 & CSS3', descripcion: 'Estructura y estilos' },
    { nombre: 'Standalone Components', descripcion: 'Arquitectura moderna' }
  ];

  caracteristicas = [
    'Comunicación entre componentes con @Input y @Output',
    'Sistema de navegación con Angular Router',
    'CRUD completo de usuarios',
    'Diseño responsive y moderno',
    'Componentes reutilizables'
  ];
}
