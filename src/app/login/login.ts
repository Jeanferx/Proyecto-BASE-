import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  @Output() close = new EventEmitter<void>();

  closeLogin() {
    this.close.emit();
  }
}
