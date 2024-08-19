import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'tg-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterModule],
})
export class AppComponent {
  constructor(title: Title) {
    title.setTitle('MARCHAL "TrAsKiN" Simon · Développeur web PHP/Symfony');
  }
}
