import { Component } from '@angular/core';
import { User } from '../models/user';
import { LoginService } from '../services/login-service';
import { request } from 'http';
import { error } from 'console';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up-component.html',
  styleUrl: './sign-up-component.css',
})

export class SignUpComponent {
  constructor(private loginservice: LoginService, private router: Router) {}
  name: string = '';
  password: number = 0;
  
  user: User = {id: 0, name: '', password: 0};

  isError: boolean = false;

  signUp1() {
    this.user.name = this.name;
    this.user.password = this.password;

    this.loginservice.create_user(this.user).subscribe({
      next: (user) => {
        this.isError = false;
        console.log(user);
        this.router.navigate(['/main', user.id]);
      },
      error: (err) => {
        this.isError = true;
        console.log(err);
      }
    });
  }
}
