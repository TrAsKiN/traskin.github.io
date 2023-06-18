import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'tg-root',
  templateUrl: './app.component.html',
})
export class AppComponent
{
  constructor(title: Title) {
    title.setTitle('MARCHAL "TrAsKiN" Simon · Développeur web PHP/Symfony');
  }
}
