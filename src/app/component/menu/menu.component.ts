import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,  // 🔹 Importante para a nova estrutura do Angular!
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {}
