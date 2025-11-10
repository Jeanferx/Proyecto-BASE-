import { Component, Input } from '@angular/core';
import { Menu } from '../menu/menu';
import { RouterOutlet } from '@angular/router'
import { Copyright } from '../copyright/copyright';
import { Login } from '../login/login'
@Component({
  selector: 'app-principal',
  templateUrl: './principal.html',
  standalone: true,
  imports: [Menu, Copyright, RouterOutlet, Login],
  styleUrls: ['./principal.css'], // <- corregido
})
export class Principal {
  @Input() showLogin: boolean = false;
}
