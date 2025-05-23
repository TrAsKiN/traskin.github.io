import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Octokit } from '@octokit/rest';
import { map } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { MinimalRepository } from './repository';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private oktokit = new Octokit();

  public reposList = toSignal(
    fromPromise(this.oktokit.repos.listForUser({ username: 'TrAsKiN' })).pipe(
      map((response: { data: MinimalRepository[] }) => response.data),
      map((reposList) =>
        reposList
          .filter((repo) => !repo.fork)
          .filter((repo) => !repo.is_template)
          .filter((repo) => repo.description)
      ),
      map((reposList) =>
        reposList.sort(
          (a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0)
        )
      )
    )
  );
}
