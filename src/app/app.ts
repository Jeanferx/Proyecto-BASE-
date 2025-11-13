import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Menu } from './menu/menu';
import { Copyright } from './copyright/copyright';
import { Login } from './login/login';
import { RegistrarUser } from './registrar-user/registrar-user';
import { ListaUser } from './lista-user/lista-user'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Menu, Copyright, Login, RegistrarUser, ListaUser],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  showLogin = false;
  showRegister = false;
  showLista = false;
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
