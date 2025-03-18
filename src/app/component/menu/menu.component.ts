import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu',
  standalone: true,  // 🔹 Importante para a nova estrutura do Angular!
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule]
})
export class MenuComponent {}
