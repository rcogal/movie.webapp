import { Component, Input } from '@angular/core';

import { MovieDetail } from '../../../../core/models/movie-detail';
import { BaseComponent } from '../../../../shared/components/base/base.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styles: [
  ]
})
export class MovieListComponent extends BaseComponent {
  @Input()
  public movie: MovieDetail;

}
