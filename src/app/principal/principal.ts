import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from '../login/login'
@Component({
  selector: 'app-principal',
  templateUrl: './principal.html',
  standalone: true,
  imports: [Login, CommonModule],
  styleUrls: ['./principal.css'],
})
export class Principal {
  @Input() showLogin: boolean = false;
}
