import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { MovieService } from '../../../core/services/movie.service';
import * as MovieActions from './movie.actions';

@Injectable()
export class MovieEffects {

  public loadMovies$ = createEffect(() => this.action$.pipe(
    ofType(MovieActions.loadMovies),
    mergeMap(
      () => this.movieSvc.paginatedShows()
        .pipe(
          map((movies) => MovieActions.loadMoviesSuccess({ movies }))
        )
    )
  ));

  public loadSearchedMovies$ = createEffect(() => this.action$.pipe(
    ofType(MovieActions.loadSearchMovies),
    mergeMap(
      (action) => this.movieSvc.searchMovies(action.query)
        .pipe(
          map((movies) => {
            const mapMovies = movies.map((movie) => movie.show);

            return MovieActions.loadMoviesSuccess({ movies: mapMovies });
          })
        )
    )
  ));

  public loadMovieDetail$ = createEffect(() => this.action$.pipe(
    ofType(MovieActions.loadMovieDetail),
    mergeMap(
      (action) => this.movieSvc.movieInfo(action.movieId)
        .pipe(
          map((movie) => MovieActions.loadMovieDetailSuccess({ movie }))
        )
    )
  ));

  public constructor(
    private readonly action$: Actions,
    private readonly movieSvc: MovieService,
  ) {}
}
