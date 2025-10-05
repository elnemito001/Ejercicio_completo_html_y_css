import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { db } from './db';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.html',
  styleUrls: ['./user-profile.css']
})
export class UserProfileComponent implements OnInit {
  datos = new db();

  user = {
    id: this.datos.usersList[0].id,
    name: this.datos.usersList[0].name,
    age: this.datos.usersList[0].age,
    email: this.datos.usersList[0].email
  };

  mostrarTabla = false;
  usuarios: any[] = [];

  buscarId: number = 0;
  usuarioEncontrado: any = null;
  mensajeBusqueda = "";

  eliminarId: number = 0;
  mensajeEliminar = "";

  nuevoNombre = "";
  nuevaEdad: number = 0;
  nuevoEmail = "";
  actualizarId: number = 0;
  mensajeFormulario = "";

  ngOnInit(): void {
    this.actualizarLista();
  }

  toggleTabla() {
    this.mostrarTabla = !this.mostrarTabla;
    if (this.mostrarTabla) {
      this.actualizarLista();
    }
  }

  actualizarLista() {
    this.usuarios = this.datos.getAll();
  }

  buscarUsuario() {
    if (this.buscarId > 0) {
      this.usuarioEncontrado = this.datos.getUserById(this.buscarId);
      if (this.usuarioEncontrado) {
        this.mensajeBusqueda = "Usuario encontrado";
      } else {
        this.mensajeBusqueda = "Usuario no encontrado";
        this.usuarioEncontrado = null;
      }
    } else {
      this.mensajeBusqueda = "Ingrese un ID válido";
      this.usuarioEncontrado = null;
    }
  }

  eliminarUsuario() {
    if (this.eliminarId > 0) {
      const eliminado = this.datos.deleteUser(this.eliminarId);
      if (eliminado) {
        this.mensajeEliminar = `Usuario ${eliminado.name} eliminado correctamente`;
        this.actualizarLista();
      } else {
        this.mensajeEliminar = "Usuario no encontrado";
      }
    } else {
      this.mensajeEliminar = "Ingrese un ID válido";
    }
    this.eliminarId = 0;
  }

  agregarUsuario() {
    if (this.nuevoNombre && this.nuevaEdad > 0 && this.nuevoEmail) {
      const nuevoUser = this.datos.addUser(this.nuevoNombre, this.nuevaEdad, this.nuevoEmail);
      this.mensajeFormulario = `Usuario ${nuevoUser.name} agregado correctamente`;
      this.limpiarFormulario();
      this.actualizarLista();
    } else {
      this.mensajeFormulario = "Complete todos los campos correctamente";
    }
  }

  actualizarUsuario() {
    if (this.actualizarId > 0 && this.nuevoNombre && this.nuevaEdad > 0 && this.nuevoEmail) {
      const actualizado = this.datos.updateUser(this.actualizarId, this.nuevoNombre, this.nuevaEdad, this.nuevoEmail);
      if (actualizado) {
        this.mensajeFormulario = `Usuario ${actualizado.name} actualizado correctamente`;
        this.limpiarFormulario();
        this.actualizarLista();
      } else {
        this.mensajeFormulario = "Usuario no encontrado";
      }
    } else {
      this.mensajeFormulario = "Complete todos los campos correctamente";
    }
  }

  limpiarFormulario() {
    this.nuevoNombre = "";
    this.nuevaEdad = 0;
    this.nuevoEmail = "";
    this.actualizarId = 0;
  }
}
