import { createAction, props } from '@ngrx/store';

import { MovieDetail } from '../../../core/models/movie-detail';

export const clearMovies = createAction(
  '[Movie] Clear Movies'
);

export const loadMovieDetail = createAction(
  '[Movie] Load Movie Detail',
  props<{ movieId: string }>()
);

export const loadMovieDetailSuccess = createAction(
  '[Movie] Load Movie Detail Success',
  props<{ movie: MovieDetail }>()
);

export const loadMovies = createAction(
  '[Movie] Load Movies'
);

export const loadMoviesSuccess = createAction(
  '[Movie] Load Success',
  props<{ movies: MovieDetail[] }>()
);

export const loadMoviesFailure = createAction(
  '[Movie] Load Fail'
);

export const loadSearchMovies = createAction(
  '[Movie] Load Search Movies',
  props<{ query: string }>()
);

