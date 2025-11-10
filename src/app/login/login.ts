import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  onSubmit() {
    // Aquí no validamos contra servidor: solo mostramos la alerta requerida
    alert('Se procederá a validar las credenciales de acceso');
  }
}
