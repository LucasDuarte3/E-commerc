import { Component } from '@angular/core';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MenuComponent, FooterComponent, RouterOutlet, 
    MatButtonModule,MatCardModule,MatIconModule,MatInputModule,MatMenuModule,MatToolbarModule,
    MatFormFieldModule,MatGridListModule] // ✅ Componentes corretamente importados
})
export class AppComponent {
  title = 'e-commerc';
}
