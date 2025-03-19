import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Certifique-se de que routes está exportado

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Isso adiciona o roteamento à aplicação
  ]
};
