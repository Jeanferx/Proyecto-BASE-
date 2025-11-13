import { Routes } from '@angular/router';
import { RegistrarUser } from './registrar-user/registrar-user';
import { Principal } from './principal/principal';
import { Login } from './login/login';
import { ListaUser } from './lista-user/lista-user'

export const routes: Routes = [
    { path: '', component: Principal },
    { path: 'login', component: Login },
    { path: 'registrar', component: RegistrarUser },
    { path: 'lista', component: ListaUser }
];
