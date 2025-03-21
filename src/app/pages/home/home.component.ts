import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [MatCardModule, MatButtonModule]
})
export class HomeComponent {
  ngAfterViewInit() {
    // Seleciona o carrossel e inicia com as configurações desejadas
    var myCarousel = document.querySelector('#carouselExampleSlidesOnly');
    if (myCarousel) {
      new bootstrap.Carousel(myCarousel, {
        interval: 2000, // Tempo entre os slides (3s)
        ride: 'carousel' // Faz o carrossel iniciar automaticamente
      });
    }
  }
}
