import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-usuario',
  standalone: true, // 👈 si estás usando standalone
  imports: [CommonModule], // 👈 importante: habilita *ngFor, *ngIf, etc.
  templateUrl: './lista-user.html',
  styleUrls: ['./lista-user.css']
})
export class ListaUser {
  usuarios = [
    { nombre: 'Juan Pérez' },
    { nombre: 'María López' },
    { nombre: 'Carlos Rodríguez' },
    { nombre: 'Ana Torres' },
  ];
}
