import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MovieDetail } from '../../../../core/models/movie-detail';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { MovieState } from '../../../../shared/stores/models/movie.state';
import * as MovieActions from '../../../../shared/stores/movies/movie.actions';
import { getMoves } from '../../../../shared/stores/movies/movie.selector';

@Component({
  selector: 'app-movie-search-results',
  templateUrl: './movie-search-results.component.html',
})
export class MovieSearchResultsComponent extends BaseComponent implements OnInit {
  public search: string;

  public movies$: Observable<MovieDetail[]>;

  public constructor(
    private store: Store<MovieState>,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    super();

    this.search = this.route.snapshot.params.search;
  }

  public ngOnInit(): void {
    // Go back to main page if search query is empty
    if (!this.search) {
      this.router.navigateByUrl('/');
    }

    this.movies$ = this.store.select(getMoves);

    // clearing the movie list here since we're reusing the same object property to display the movie list
    // TODO: find a nicer way to manage the clearing of movies
    this.store.dispatch(MovieActions.clearMovies());

    this.store.dispatch(MovieActions.loadSearchMovies({
      query: this.search
    }));
  }
}
