import { Component } from '@angular/core';
// Ruta correcta: 2 niveles arriba
import { UserProfileComponent } from '../../componentes/user-profile/user-profile';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [UserProfileComponent],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class UsuariosComponent {
}
