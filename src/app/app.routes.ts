import { Routes } from '@angular/router';
import { Principal } from './feature/principal/principal';
import { Login } from './feature/login/login';
import { ListaUser } from './feature/lista-user/lista-user'

export const routes: Routes = [
    { path: '', component: Principal },
    { path: 'login', component: Login },
    { path: 'lista', component: ListaUser }
];
