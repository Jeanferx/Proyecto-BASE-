import { Routes } from '@angular/router';
import { Principal } from './feature/principal/principal';
import { Login } from './feature/auth/login/login';
import { ListaUser } from './feature/auth/lista-user/lista-user'
import { Register } from './feature/auth/register/register'
export const routes: Routes = [
    { path: '', component: Principal },
    { path: 'login', component: Login },
    { path: 'lista', component: ListaUser },
    { path: 'register', component: Register }
];
