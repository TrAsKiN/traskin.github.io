import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    pathMatch: 'full',
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
