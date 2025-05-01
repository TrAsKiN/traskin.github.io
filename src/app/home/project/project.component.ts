import { Component, input } from '@angular/core';
import { Project } from 'src/app/project';

@Component({
  selector: 'tg-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  public project = input.required<Project>();
}
