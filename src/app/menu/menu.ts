import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'], // <- corregido
})
export class Menu {
  @Output() loginClick = new EventEmitter<void>();

  onLoginClick() {
    this.loginClick.emit();
  }
}
