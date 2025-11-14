import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-user',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './lista-user.html',
  styleUrls: ['./lista-user.css']
})
export class ListaUser {
  Usuario: any[] = []; // Lista que vendrá de la API
  private apiUrl = 'https://localhost:7027/WeatherForecast'; // tu endpoint

  constructor(private http: HttpClient) {
    this.cargarUsuarios();
  }

  // Función para traer todos los usuarios
  cargarUsuarios() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (res) => {
        this.Usuario = res;
        console.log('Usuarios cargados:', this.Usuario);
      },
      error: (err) => {
        console.error('Error al cargar usuarios:', err);
      }
    });
  }

  eliminarUsuario(usuario: any) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Deseas eliminar a ${usuario.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e63946',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      background: '#f8fdff',
      color: '#004e92'
    }).then((result) => {
      if (result.isConfirmed) {
        // Llamada DELETE a la API
        this.http.delete(`${this.apiUrl}/${usuario.id}`).subscribe({
          next: () => {
            this.Usuario = this.Usuario.filter(u => u.id !== usuario.id);
            Swal.fire({
              title: 'Eliminado',
              text: `${usuario.nombre} ha sido eliminado correctamente.`,
              icon: 'success',
              confirmButtonColor: '#00b894',
              background: '#f8fdff',
              color: '#004e92'
            });
          },
          error: (err) => {
            console.error('Error al eliminar:', err);
            Swal.fire('Error', 'No se pudo eliminar el usuario', 'error');
          }
        });
      }
    });
  }

  leerUsuario(usuario: any) {
    Swal.fire({
      title: `${usuario.nombre} ${usuario.apellido}`,
      html: `
        <p><strong>Edad:</strong> ${usuario.edad}</p>
        <p><strong>Género:</strong> ${usuario.genero}</p>
        <p><strong>Correo:</strong> ${usuario.correo}</p>
        <p><strong>Rol:</strong> ${usuario.rol}</p>
      `,
      icon: 'info',
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#004e92',
      background: '#f8fdff',
      color: '#004e92'
    });
  }
}
