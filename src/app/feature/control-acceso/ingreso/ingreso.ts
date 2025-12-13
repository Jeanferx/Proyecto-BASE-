import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ControlAccesoService } from '../control-acceso.service';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ingreso.html',
  styleUrls: ['./ingreso.css'],
})
export class Ingreso {
  registro = {
    nombre: '',
    identificacion: '',
    motivo: '',
    tipo: 'Visitante',
    foto: null as string | null,
  };

  constructor(private controlAccesoService: ControlAccesoService, private router: Router) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => (this.registro.foto = e.target?.result as string);
      reader.readAsDataURL(file);
    }
  }

  guardar() {
    this.controlAccesoService.add(this.registro);
    this.router.navigate(['/accesos/registros']);
    this.registro = { nombre: '', identificacion: '', motivo: '', tipo: 'Visitante', foto: null };
  }
}
