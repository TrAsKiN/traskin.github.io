import { Injectable } from '@angular/core';
import { Octokit } from '@octokit/rest';
import { map } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { MinimalRepository } from './types/minimal-repository';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  oktokit = new Octokit();

  getReposList() {
    return fromPromise(
      this.oktokit.repos.listForUser({ username: 'TrAsKiN' })
    ).pipe(
      map((response: { data: MinimalRepository[] }) => response.data),
      map((reposList) =>
        reposList
          .filter((repo) => !repo.fork)
          .filter((repo) => repo.description)
          .filter((repo) => !repo.is_template)
      ),
      map((reposList) =>
        reposList.sort(
          (a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0)
        )
      )
    );
  }
}
