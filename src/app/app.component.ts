import { Component } from '@angular/core';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MenuComponent, FooterComponent, HomeComponent, LoginComponent, RouterOutlet] // ✅ Componentes corretamente importados
})
export class AppComponent {}
