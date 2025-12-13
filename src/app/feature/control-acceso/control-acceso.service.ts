import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Registro {
  fecha: string;
  nombre: string;
  identificacion: string;
  motivo: string;
  tipo: string;
  foto?: string | null;
  salida?: string | null;
}

@Injectable({ providedIn: 'root' })
export class ControlAccesoService {
  private STORAGE_KEY = 'control_acceso_registros';
  private _historial = new BehaviorSubject<Registro[]>(this.load());
  historial$ = this._historial.asObservable();

  private load(): Registro[] {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private save(list: Registro[]) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
    } catch {
      // ignore storage errors
    }
    this._historial.next(list);
  }

  add(registro: Omit<Registro, 'fecha'>) {
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    const fecha = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(
      now.getHours()
    )}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    const item: Registro = { fecha, ...registro };
    const list = [item, ...this._historial.value];
    this.save(list);
  }

  markSalida(identificacion: string) {
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    const salida = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(
      now.getHours()
    )}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    const list = this._historial.value.map((r) => {
      if (r.identificacion === identificacion && !r.salida) {
        return { ...r, salida };
      }
      return r;
    });
    this.save(list);
  }

  getAll(): Registro[] {
    return this._historial.value;
  }
}
