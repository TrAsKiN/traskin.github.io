import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile';

@Component({
  selector: 'tg-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
})
export class AppComponent {
  title = inject(Title);
  profile = Profile;

  constructor() {
    this.title.setTitle(
      `${this.profile.lastName} "${this.profile.nickname}" ${this.profile.firstName} · ${this.profile.role}`
    );
  }
}
