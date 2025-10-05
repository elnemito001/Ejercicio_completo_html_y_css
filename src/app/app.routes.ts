// Importamos Routes de Angular Router
import { Routes } from '@angular/router';

// Importamos los componentes
import { HomeComponent } from './components/home/home';
import { UsuariosComponent } from './components/usuarios/usuarios';
import { AcercaComponent } from './components/acerca/acerca';
import { FormularioComponent } from './components/formulario/formulario'; // NUEVO

// Definimos las rutas de la aplicación
export const routes: Routes = [
  // Ruta raíz ('/') redirige automáticamente a /home
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Ruta /home muestra HomeComponent
  { path: 'home', component: HomeComponent },

  // Ruta /usuarios muestra UsuariosComponent (con tu CRUD)
  { path: 'usuarios', component: UsuariosComponent },

  // Ruta /acerca muestra AcercaComponent
  { path: 'acerca', component: AcercaComponent },

  // NUEVA RUTA: Formulario de registro
  { path: 'formulario', component: FormularioComponent },

  // Si alguien escribe una ruta que no existe, redirige a /home
  { path: '**', redirectTo: '/home' }
];
