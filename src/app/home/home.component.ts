import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { GithubService } from '../github.service';
import { Profile } from '../profile';
import { Project } from '../project';
import { ProjectComponent } from './project/project.component';
import { RepositoryComponent } from './repository/repository.component';

@Component({
  selector: 'tg-home',
  templateUrl: './home.component.html',
  imports: [CommonModule, ProjectComponent, RepositoryComponent],
})
export class HomeComponent {
  private github = inject(GithubService);

  protected profile = Profile;
  protected languages = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'PHP',
    'SQL',
    'Lua',
  ];
  protected socials = [
    { icon: 'twitter-x', url: 'https://twitter.com/notTrAsKiN' },
    { icon: 'github', url: 'https://github.com/TrAsKiN' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/marchal-simon/' },
    { icon: 'twitch', url: 'https://www.twitch.tv/traskin' },
    // { icon: 'youtube', url: 'https://www.youtube.com/@mentor-du-web' },
  ];
  protected repositories = computed(() => {
    const projects = this.projects();
    return this.github
      .reposList()
      ?.filter((repo) => !projects.some((project) => project.id === repo.name));
  });
  protected projects = computed<Project[]>(() => [
    {
      id: 'lsparadise',
      name: 'Los Santos Paradise',
      image: 'lsparadise.png',
      technologies: ['Symfony', 'Bootstrap', 'Lua', 'Docker'],
      description:
        "<strong>Los Santos Paradise</strong> est un projet toujours en cours de développement. Il s'agit d'un serveur modifié par mes soins pour le jeu GTA V utilisant FiveM. Le code est écrit en Lua et certaines interfaces en jeu utilisent du JavaScript.",
      url: 'https://lsparadise.fr/',
    },
    {
      id: 'nikke-tools',
      name: 'Nikke Tools',
      image: 'nikke-tools.png',
      technologies: ['Angular', 'Material'],
      description:
        '<strong>Nikke Tools</strong> est un projet de site web pour le jeu mobile Nikke. Il permet de suivre ses personnages pour les optimiser au mieux.',
      url: 'https://nikke.traskin.net/fr/',
    },
    {
      id: 'slideshow',
      name: 'Slideshow',
      technologies: ['Angular', 'Bootstrap', 'Google API'],
      description:
        "<strong>Slideshow</strong> est un projet permettant de générer un diaporama à partir d'un album Google Photos. (en cours de validation par Google)",
      url: 'https://slideshow.traskin.net/',
    },
    {
      id: 'tech-watch',
      name: 'Tech Watch',
      image: 'tech-watch.png',
      technologies: ['Symfony', 'React.js', 'Bootstrap', 'API', 'Docker'],
      description:
        "<strong>Tech Watch</strong> vous permet de regrouper toutes vos sources d'informations en un seul endroit. Que ce soit des utilisateurs Twitter que vous suivez assidûment ou des flux RSS que vous consultez régulièrement, vous pouvez créer et partager une liste personnalisée.",
      archived: true,
    },
    {
      id: 'owl-buvette',
      name: 'OWL Buvette',
      image: 'owl-buvette.png',
      technologies: ['Angular', 'Bootstrap'],
      description:
        '<strong>OWL Buvette</strong> est un outil créé à l\'origine pour le streamer <a class="position-relative z-3" href="https://www.twitch.tv/fefegg" target="_blank">Féfé</a> afin de suivre sur un seul écran les flux de son live et celui de l\'Overwatch League.',
      url: 'https://traskin.github.io/owl-buvette/',
      sources: 'https://github.com/TrAsKiN/owl-buvette',
      stars: this.github
        .reposList()
        ?.find((repo) => repo.name === 'owl-buvette')?.stargazers_count,
      archived: true,
    },
  ]);
}
