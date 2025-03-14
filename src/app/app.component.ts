import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component'; // ✅ Importando o Footer
import { MenuComponent } from './component/menu/menu.component'; // ✅ Importando o Menu

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Obrigatório no modo Standalone
  imports: [RouterOutlet, FooterComponent, MenuComponent], // ✅ Adicionando os componentes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerc';
}
