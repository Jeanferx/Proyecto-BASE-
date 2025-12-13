import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  @Output() loginExitoso = new EventEmitter<string>();  // 🔵 AGREGAR ESTO

  usuario: string = '';
  clave: string = '';

  private usuarioValido = 'admin@gmail.com';
  private claveValida = '12345';

  constructor(private router: Router) { }

  onSubmit() {
    if (this.usuario === this.usuarioValido && this.clave === this.claveValida) {
      alert('Login correcto');

      // Emitir evento (opcional si lo necesitas en el componente padre)
      this.loginExitoso.emit(this.usuario);
      console.log("🤖 Login emitiendo:", this.usuario);

      // 🔵 Redirigir a la página principal
      this.router.navigate(['']);
    } else {
      alert('Credenciales incorrectas');
    }
  }


  irARegistro() {
    this.router.navigate(['/registrar']);
  }
}