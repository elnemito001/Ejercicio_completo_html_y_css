// Importamos Component (para crear el componente) e Input (para recibir datos)
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compo-hijo', // Nombre para usar en HTML: <app-compo-hijo>
  standalone: true, // Componente independiente
  imports: [], // No necesita importar nada
  templateUrl: './compo-hijo.html', // Su archivo HTML
  styleUrl: './compo-hijo.css' // Su archivo CSS
})
export class CompoHijoComponent {

  // @Input() permite RECIBIR datos del componente padre
  // Es como una "entrada" de datos
  @Input() data: any = {};

  // Explicación:
  // - @Input() = decorador que dice "este componente puede recibir datos"
  // - data = nombre de la variable que recibirá los datos
  // - any = acepta cualquier tipo de dato
  // - = {} = valor por defecto (objeto vacío)
}
