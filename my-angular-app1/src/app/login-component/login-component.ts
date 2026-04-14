import { Component } from '@angular/core';
import { LoginService } from '../services/login-service';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { DataService } from '../services/data-service';

@Component({
  selector: 'app-login-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  constructor(private loginservice: LoginService, private router: Router) {}

  name: string = '';
  password: number = 0;
  isError: boolean = false;

  user1$!: Observable<User>;

  logIn1() {
    this.user1$ = this.loginservice.get_user1(this.name, this.password);
    this.user1$.subscribe({
      next: (user) => {
        this.isError = false
        console.log(user)
        this.router.navigate(['/main', user.id])
      },
      error: (err) => {
        this.isError = true
        console.log(err)
      },
    });
  }

}
