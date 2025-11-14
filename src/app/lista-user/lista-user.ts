import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lista-user',
  standalone: true, // 👈 si estás usando standalone
  imports: [CommonModule], // 👈 importante: habilita *ngFor, *ngIf, etc.
  templateUrl: './lista-user.html',
  styleUrls: ['./lista-user.css']
})
export class ListaUser {
  usuarios = [
    { nombre: 'Juan', apellido: 'Pérez', edad: 18, genero: 'Masculino', correo: 'juan.perez@gmail.com', password: 12345, rol: 'Operador' },
    { nombre: 'María', apellido: 'López', edad: 22, genero: 'Femenino', correo: 'maria.lopez@gmail.com', password: 12345, rol: 'Administradora' },
    { nombre: 'Carlos', apellido: 'Rodríguez', edad: 30, genero: 'Masculino', correo: 'carlos.rodriguez@gmail.com', password: 12345, rol: 'Supervisor' },
    { nombre: 'Ana', apellido: 'Torres', edad: 25, genero: 'Femenino', correo: 'ana.torres@gmail.com', password: 12345, rol: 'Supervisor' },
  ];
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
        // Aquí va tu lógica para eliminar el usuario de la lista o base de datos
        this.usuarios = this.usuarios.filter(u => u !== usuario);

        Swal.fire({
          title: 'Eliminado',
          text: `${usuario.nombre} ha sido eliminado correctamente.`,
          icon: 'success',
          confirmButtonColor: '#00b894',
          background: '#f8fdff',
          color: '#004e92'
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
