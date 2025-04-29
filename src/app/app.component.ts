import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Profile } from './profile';

@Component({
  selector: 'tg-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterModule],
})
export class AppComponent {
  profile = Profile;
  constructor(title: Title) {
    title.setTitle(
      `${this.profile.lastName} "${this.profile.nickname}" ${this.profile.firstName} · ${this.profile.role}`
    );
  }
}
