// Importamos Angular y RouterOutlet para mostrar las páginas
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Importamos encabezado
import { EncabezadoComponent } from './components/encabezado/encabezado';

@Component({
  selector: 'app-root',
  standalone: true,
  // Importamos el encabezado y RouterOutlet (necesario para que funcione la navegación)
  imports: [EncabezadoComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // El router maneja todo automáticamente
}
