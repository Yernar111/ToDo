import { Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { SignUpComponent } from './sign-up-component/sign-up-component';
import { MainComponent } from './main-component/main-component';
import { App } from './app';
import { RegisterComponent } from './register-component/register-component';

export const routes: Routes = [
    { path: '', component: RegisterComponent},
    { path: 'signup', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'main/:id', component: MainComponent }
];
