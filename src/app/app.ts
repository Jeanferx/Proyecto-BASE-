import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Menu } from './menu/menu';
import { Principal } from './principal/principal';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Menu, Principal, Login],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  showLogin = false;

  onLoginClicked() {
    this.showLogin = true; // muestra el login al hacer clic
  }
}
