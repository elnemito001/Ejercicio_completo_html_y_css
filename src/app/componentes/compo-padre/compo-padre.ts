// Importamos Component de Angular
import { Component } from '@angular/core';

// Importamos el componente hijo (necesitamos usarlo dentro del padre)
import { CompoHijoComponent } from "../compo-hijo/compo-hijo";

@Component({
  selector: 'app-compo-padre', // Nombre para usar en HTML: <app-compo-padre>
  standalone: true, // Componente independiente
  imports: [CompoHijoComponent], // Importamos el hijo para poder usarlo
  templateUrl: './compo-padre.html', // Su archivo HTML
  styleUrl: './compo-padre.css' // Su archivo CSS
})
export class CompoPadreComponent {

  // Variable que contiene los datos que vamos a ENVIAR al hijo
  user = {
    nombre: "Hugo",
    apellido: "Larraga"
  }

  // Explicación:
  // Esta variable "user" la vamos a pasar al componente hijo
  // El hijo la recibirá usando @Input()
}
