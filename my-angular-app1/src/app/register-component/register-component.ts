import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  imports: [],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {
  constructor(private router: Router) {}
  toSignUpPage(){
    this.router.navigate(['signup']);
  }
  toLogInPage(){
    this.router.navigate(['login']);
  }
}
