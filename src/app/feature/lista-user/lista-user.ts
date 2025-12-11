import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lista-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-user.html',
  styleUrls: ['./lista-user.css']
})
export class ListaUser {
  usuariosOriginales = new Map();
  usuarios = [
    { nombre: 'Juan', apellido: 'Pérez', edad: 18, genero: 'Masculino', correo: 'juan.perez@gmail.com', password: 12345, rol: 'Operador' },
    { nombre: 'María', apellido: 'López', edad: 22, genero: 'Femenino', correo: 'maria.lopez@gmail.com', password: 12345, rol: 'Administradora' },
    { nombre: 'Carlos', apellido: 'Rodríguez', edad: 30, genero: 'Masculino', correo: 'carlos.rodriguez@gmail.com', password: 12345, rol: 'Supervisor' },
    { nombre: 'Ana', apellido: 'Torres', edad: 25, genero: 'Femenino', correo: 'ana.torres@gmail.com', password: 12345, rol: 'Supervisor' },
  ];
  editarUsuario(usuario: any) {
    if (!this.usuariosOriginales.has(usuario)) {
      this.usuariosOriginales.set(usuario, { ...usuario });
    }
    Swal.fire({
      title: 'Editar Usuario',
      html: `
        <input id="swal-nombre" class="swal2-input" placeholder="Nombre" value="${usuario.nombre}">
        <input id="swal-apellido" class="swal2-input" placeholder="Apellido" value="${usuario.apellido}">
        <input id="swal-edad" class="swal2-input" type="number" placeholder="Edad" value="${usuario.edad}">
        <input id="swal-genero" class="swal2-input" placeholder="Género" value="${usuario.genero}">
        <input id="swal-correo" class="swal2-input" placeholder="Correo" value="${usuario.correo}">
        <input id="swal-rol" class="swal2-input" placeholder="Rol" value="${usuario.rol}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#004e92',
      background: '#f8fdff',
      color: '#004e92',
      preConfirm: () => {
        return {
          nombre: (document.getElementById('swal-nombre') as HTMLInputElement).value,
          apellido: (document.getElementById('swal-apellido') as HTMLInputElement).value,
          edad: Number((document.getElementById('swal-edad') as HTMLInputElement).value),
          genero: (document.getElementById('swal-genero') as HTMLInputElement).value,
          correo: (document.getElementById('swal-correo') as HTMLInputElement).value,
          rol: (document.getElementById('swal-rol') as HTMLInputElement).value
        };
      }
    }).then((result) => {

      if (result.isConfirmed && result.value) {

        usuario.nombre = result.value.nombre;
        usuario.apellido = result.value.apellido;
        usuario.edad = result.value.edad;
        usuario.genero = result.value.genero;
        usuario.correo = result.value.correo;
        usuario.rol = result.value.rol;

        Swal.fire({
          title: 'Actualizado',
          text: 'El usuario ha sido actualizado correctamente.',
          icon: 'success',
          confirmButtonColor: '#00b894',
          background: '#f8fdff',
          color: '#004e92'
        });
      }
    });
  }

  // --------------------
  // VOLVER A DATOS ORIGINALES
  // --------------------
  volverUsuario(usuario: any) {
    const copia = this.usuariosOriginales.get(usuario);

    if (!copia) {
      Swal.fire("No hay cambios", "Este usuario no ha sido editado todavía.", "info");
      return;
    }

    // Restaurar datos
    Object.assign(usuario, copia);

    Swal.fire({
      title: 'Restaurado',
      text: 'Los datos anteriores han sido recuperados.',
      icon: 'success',
      confirmButtonColor: '#00b894',
      background: '#f8fdff',
      color: '#004e92'
    });
  }

  // --------------------
  // ELIMINAR USUARIO
  // --------------------
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

        this.usuariosOriginales.delete(usuario); // limpiar copia
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
}
