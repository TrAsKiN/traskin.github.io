import { Component, input } from '@angular/core';
import { MinimalRepository } from 'src/app/repository';

@Component({
  selector: 'tg-repository',
  imports: [],
  templateUrl: './repository.component.html',
})
export class RepositoryComponent {
  public repository = input.required<MinimalRepository>();
  public archived = input<boolean>(false);
}
