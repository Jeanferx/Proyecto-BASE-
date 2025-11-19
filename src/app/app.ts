import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Menu } from './menu/menu';
import { Copyright } from './copyright/copyright';
import { Login } from './login/login';
import { RegistrarUser } from './registrar-user/registrar-user';
import { ListaUser } from './lista-user/lista-user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Menu,
    Copyright,
    Login,
    RegistrarUser,
    ListaUser
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  nombreUsuario: string = "";

  showLogin = false;
  showRegister = false;
  showLista = false;

  constructor(private router: Router) { }  // 🔵 INYECTAR Router

  // 🔹 Recibe el nombre del login
  recibirLogin(nombre: string) {
    console.log("📦 App recibió nombre:", nombre);
    this.nombreUsuario = nombre;
    this.showLogin = false;

    // 🔵 Opcional: Navegar a la página principal después del login
    this.router.navigate(['/']);
  }

  // 🔹 Manejar logout - ESTE ES EL MÉTODO QUE SE EJECUTA
  onLogoutClicked() {
    console.log("🔴 Cerrando sesión...");

    // 1. Limpiar el usuario
    this.nombreUsuario = "";

    // 2. Ocultar todos los componentes
    this.showLogin = false;
    this.showRegister = false;
    this.showLista = false;

    // 3. 🔵 Navegar a la página principal (opcional)
    this.router.navigate(['/']);

    // 4. Mostrar mensaje de confirmación
    alert('Sesión cerrada correctamente');

    console.log("✅ Sesión cerrada");
  }

  onLoginClicked() {
    this.showLogin = true;
    this.showRegister = false;
    this.showLista = false;
  }

  onRegisterClicked() {
    this.showRegister = true;
    this.showLogin = false;
    this.showLista = false;
  }

  onListaClicked() {
    this.showRegister = false;
    this.showLogin = false;
    this.showLista = true;
  }
}