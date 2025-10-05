import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule], // Necesitamos FormsModule para usar ngModel
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class FormularioComponent {

  // Variables para almacenar los datos del formulario
  nombre: string = '';      // Almacena el nombre ingresado
  apellidos: string = '';   // Almacena los apellidos ingresados
  edad: number = 0;         // Almacena la edad ingresada

  // Variables para controlar la visualización
  mostrarDatos: boolean = false;  // Controla si se muestra la caja de información

  // Variables para mostrar mensajes de error
  mensajeError: string = '';  // Almacena el mensaje de error de validación


  // Función que se ejecuta cuando se envía el formulario
  enviarFormulario() {
    // Limpiar mensaje de error anterior
    this.mensajeError = '';

    // VALIDACIÓN 1: Verificar que nombre NO esté vacío
    if (this.nombre.trim() === '') {
      this.mensajeError = 'El nombre no puede estar vacío';
      return; // Detener la ejecución si hay error
    }

    // VALIDACIÓN 2: Verificar que apellidos NO esté vacío
    if (this.apellidos.trim() === '') {
      this.mensajeError = 'Los apellidos no pueden estar vacíos';
      return; // Detener la ejecución si hay error
    }

    // VALIDACIÓN 3: Verificar que edad sea mayor a 0
    if (this.edad <= 0) {
      this.mensajeError = 'La edad debe ser un número positivo mayor a 0';
      return; // Detener la ejecución si hay error
    }

    // Si todas las validaciones pasaron, mostrar los datos
    this.mostrarDatos = true;
  }


  // Función que se ejecuta cuando se hace clic en el botón "Cerrar"
  cerrarDatos() {
    // Ocultar la caja de información
    this.mostrarDatos = false;

    // Limpiar los campos del formulario
    this.nombre = '';
    this.apellidos = '';
    this.edad = 0;

    // Limpiar mensaje de error
    this.mensajeError = '';

    // Poner el enfoque en el primer input (nombre)
    // Se hace con un pequeño delay para asegurar que el DOM esté listo
    setTimeout(() => {
      const inputNombre = document.getElementById('inputNombre');
      if (inputNombre) {
        inputNombre.focus(); // Pone el cursor en el input de nombre
      }
    }, 100);
  }
}
