import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginService } from './services/login-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
