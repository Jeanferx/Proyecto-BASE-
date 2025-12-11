import { Routes } from '@angular/router';
import { Principal } from './feature/principal/principal';
import { Login } from './feature/login/login';

export const routes: Routes = [
    { path: '', component: Principal },
    { path: 'login', component: Login }
];
