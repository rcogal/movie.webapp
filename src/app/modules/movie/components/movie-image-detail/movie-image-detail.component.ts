import { Component, Input } from '@angular/core';

import { MovieDetail } from '../../../../core/models/movie-detail';

@Component({
  selector: 'app-movie-image-detail',
  templateUrl: './movie-image-detail.component.html',
  styles: [
  ]
})
export class MovieImageDetailComponent {

  @Input()
  public movie: MovieDetail;

}
