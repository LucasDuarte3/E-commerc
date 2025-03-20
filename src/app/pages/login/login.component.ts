import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 🔹 Importando o roteador do Angular

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {} // 🔹 Injeta o Router

  voltarParaHome() {
    this.router.navigate(['/home']); // 🔹 Redireciona para Home
  }
}
