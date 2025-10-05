import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class LayoutComponent {
  // Este componente no necesita lógica, solo muestra el diseño
}
