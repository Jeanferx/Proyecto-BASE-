import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar-user',
  standalone: true,
  imports: [FormsModule, HttpClientModule],  // ⬅️ AGREGA ESTO
  templateUrl: './registrar-user.html',
  styleUrl: './registrar-user.css',
})
export class RegistrarUser {
  constructor(private http: HttpClient) { }

  Usuario = {
    nombre: '', apellido: '', edad: 0, genero: '', correo: '', password: '', rol: ''
  };

  guardarEmpleado() {
    this.http.post('https://localhost:7027/WeatherForecast', this.Usuario)
      .subscribe(res => console.log('Empleado guardado:', res));
  }
}
