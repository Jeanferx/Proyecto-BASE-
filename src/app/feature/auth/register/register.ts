import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  name: string = '';
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onRegister() {
    if (this.name && this.email && this.password) {
      alert(`¡Usuario ${this.name} registrado correctamente!`);
      this.name = '';
      this.email = '';
      this.password = '';
      this.showPassword = false;
    } else {
      alert('Por favor completa todos los campos');
    }
  }
}