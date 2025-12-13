import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ControlAccesoService, Registro } from '../control-acceso.service';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './registros.html',
  styleUrls: ['./registros.css'],
})
export class Registros {
  historial: Registro[] = [];

  constructor(private controlAccesoService: ControlAccesoService) {
    this.historial = this.controlAccesoService.getAll();
    this.controlAccesoService.historial$.subscribe((h) => (this.historial = h));
  }

  registrarSalida(identificacion: string) {
    if (!identificacion) return;
    this.controlAccesoService.markSalida(identificacion);
  }
}
