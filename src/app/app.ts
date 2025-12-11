import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Menu } from './shared/menu/menu';
import { Copyright } from './shared/copyright/copyright';
import { Login } from './feature/login/login';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Menu, Copyright, Login],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  showLogin = false;
  onLoginClicked() {
    this.showLogin = true;
  }
}
