import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  imports: [CommonModule, MatButtonModule, MatMenuModule, RouterModule],
  styleUrls: ['./menu.css'],
  standalone: true
})
export class Menu {
  @Input() nombreUsuario: string = "";

  @Output() loginClick = new EventEmitter<void>();
  @Output() logoutClick = new EventEmitter<void>();  // 🔵 AGREGAR para logout
  onLogout() {
    if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
      this.logoutClick.emit();
    }
  }
}
