import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu',
  standalone: true, // IMPORTANTE para projetos sem NgModule
  imports: [RouterModule, MatToolbarModule, MatButtonModule], // Importa RouterModule
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {}
