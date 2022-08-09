import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MovieDetail } from '../../../../core/models/movie-detail';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { MovieState } from '../../../../shared/stores/models/movie.state';
import * as MovieActions from '../../../../shared/stores/movies/movie.actions';
import { getMoves } from '../../../../shared/stores/movies/movie.selector';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
})
export class MovieSearchComponent extends BaseComponent implements OnInit {
  public searchKeyword: string;

  public movies$: Observable<MovieDetail[]>;

  public constructor(
    private readonly store: Store<MovieState>,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.movies$ = this.store.select(getMoves);

    // clearing the movie list here since we're reusing the same object property to display the movie list
    // TODO: find a nicer way to manage the clearing of movies
    this.store.dispatch(MovieActions.clearMovies());

    this.store.dispatch(MovieActions.loadMovies());
  }
}
