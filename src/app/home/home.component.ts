import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { GithubService } from '../github.service';

@Component({
  selector: 'tg-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [CommonModule],
})
export class HomeComponent {
  public reposList = toSignal(this.github.getReposList());
  public languages = ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'Lua'];
  public activeProjects = [
    {
      name: 'Los Santos Paradise',
      image: 'lsp.png',
      technologies: ['Symfony', 'Bootstrap', 'Lua', 'Docker'],
      description:
        "<strong>Los Santos Paradise</strong> est un projet toujours en cours de développement. Il s'agit d'un serveur modifié par mes soins pour le jeu GTA V utilisant FiveM. Le code est écrit en Lua et certaines interfaces en jeu utilisent du JavaScript.",
      url: 'https://lsparadise.fr/',
    },
    {
      name: 'OWL Buvette',
      image: 'owl-buvette.png',
      technologies: ['Angular', 'Bootstrap'],
      description:
        '<strong>OWL Buvette</strong> est un outil créé à l\'origine pour le streamer <a class="position-relative z-3" href="https://www.twitch.tv/fefegg" target="_blank">Féfé</a> afin de suivre sur un seul écran les flux de son live et celui de l\'Overwatch League.',
      url: 'https://traskin.github.io/owl-buvette/',
    },
  ];
  protected archivedProjects = [
    {
      name: 'Tech Watch',
      technologies: ['Symfony', 'React.js', 'Bootstrap', 'API', 'Docker'],
      description:
        "<strong>Tech Watch</strong> vous permet de regrouper toutes vos sources d'informations en un seul endroit. Que ce soit des utilisateurs Twitter que vous suivez assidûment ou des flux RSS que vous consultez régulièrement, vous pouvez créer et partager une liste personnalisée.",
    },
  ];
  public socials = [
    { icon: 'twitter', url: 'https://twitter.com/notTrAsKiN' },
    { icon: 'github', url: 'https://github.com/TrAsKiN' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/marchal-simon/' },
    { icon: 'twitch', url: 'https://www.twitch.tv/traskin' },
    { icon: 'youtube', url: 'https://www.youtube.com/@mentor-du-web' },
  ];

  constructor(private github: GithubService) {}
}
