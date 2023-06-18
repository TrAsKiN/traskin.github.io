import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from '../github.service';
import { MinimalRepository } from '../types/minimal-repository';

@Component({
  selector: 'tg-home',
  templateUrl: './home.component.html',
})
export class HomeComponent
{
  public reposList$!: Observable<MinimalRepository[]>;
  public languages = ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'Lua'];
  public projects = [
    {
      name: 'Tech Watch',
      image: 'tech-watch.png',
      technologies: ['Symfony', 'React.js', 'Bootstrap', 'API', 'Docker'],
      description: '<strong>Tech Watch</strong> vous permet de regrouper toutes vos sources d\'informations en un seul endroit. Que ce soit des utilisateurs Twitter que vous suivez assidûment ou des flux RSS que vous consultez régulièrement, vous pouvez créer et partager une liste personnalisée.',
      url: 'https://techno-watch.io/',
    },
    {
      name: 'Los Santos Paradise',
      image: 'lsp.png',
      technologies: ['Symfony', 'Bootstrap', 'Lua', 'Docker'],
      description: '<strong>Los Santos Paradise</strong> est un projet toujours en cours de développement. Il s\'agit d\'un serveur modifié par mes soins pour le jeu GTA V utilisant FiveM. Le code est écrit en Lua et certaines interfaces en jeu utilisent du JavaScript.',
      url: 'https://lsp.traskin.net/',
    },
    {
      name: 'OWL Buvette',
      image: 'owl-buvette.png',
      technologies: ['React.js', 'Bootstrap'],
      description: '<strong>OWL Buvette</strong> est un outil créé à l\'origine pour le streamer <a class="position-relative z-3" href="https://www.twitch.tv/fefegg" target="_blank">Féfé</a> afin de suivre sur un seul écran les flux de son live et celui de l\'Overwatch League.',
      url: 'https://traskin.github.io/owl-buvette/#owlEN',
    },
  ];
  public socials = [
    { icon: 'twitter', url: 'https://twitter.com/notTrAsKiN' },
    { icon: 'github', url: 'https://github.com/TrAsKiN' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/marchal-simon/' },
    { icon: 'twitch', url: 'https://www.twitch.tv/traskin' },
    { icon: 'youtube', url: 'https://www.youtube.com/@mentor-du-web' },
  ];

  constructor(private github: GithubService) {
    this.reposList$ = this.github.getReposList();
  }
}
