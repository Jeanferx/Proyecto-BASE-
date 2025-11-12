import { Component, EventEmitter, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  imports: [MatButtonModule, MatMenuModule, RouterModule],
  styleUrls: ['./menu.css'],
  standalone: true
})
export class Menu {

}
