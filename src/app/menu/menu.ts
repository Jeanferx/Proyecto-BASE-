import { Component, EventEmitter, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  imports: [MatButtonModule, MatMenuModule],
  styleUrls: ['./menu.css'],
})
export class Menu {
  @Output() loginClick = new EventEmitter<void>();

  onLoginClick() {
    this.loginClick.emit();
  }
}
