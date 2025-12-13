import { Routes } from '@angular/router';
import { Principal } from './feature/principal/principal';
import { Login } from './feature/auth/login/login';
import { ListaUser } from './feature/auth/lista-user/lista-user';
import { Register } from './feature/auth/register/register';
import { Registros } from './feature/control-acceso/registros/registros';
import { Ingreso } from './feature/control-acceso/ingreso/ingreso';
export const routes: Routes = [
  { path: '', component: Principal },
  { path: 'login', component: Login },
  { path: 'lista', component: ListaUser },
  { path: 'register', component: Register },
  { path: 'accesos/ingreso', component: Ingreso },
  { path: 'accesos/registros', component: Registros },
];
