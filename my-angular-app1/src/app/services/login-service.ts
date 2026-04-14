import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor (private http: HttpClient, private router: Router) {}

  signUpPage() {
    this.router.navigate(['/signup']);
  }

  logInPage() {
    this.router.navigate(['/login']);
  }

  create_user(v1: User): Observable<User>{
    return this.http.post<User>(`http://127.0.0.1:8000/users/`, v1);
  }

  get_user1(name: string, password: number): Observable<User> {
    return this.http.get<User>(`http://127.0.0.1:8000/users/${name}/${password}/`);
  }

  // get_user2(id: number): Observable<User> {
  //   return this.http.get<User>(`http://127.0.0.1:8000/users/${id}`);
  // }
}
