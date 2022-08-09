import { createReducer, on } from '@ngrx/store';

import { MovieState } from '../models/movie.state';
import * as MovieActions from './movie.actions';

const defaultState: MovieState = {
  movies: [],
  selectedMovie: undefined,
};

export const movieReducer = createReducer<MovieState>(
  defaultState,

  on(MovieActions.clearMovies, (state): MovieState => ({
    ...state,
    movies: []
  })),

  on(MovieActions.loadMoviesSuccess, (state, action): MovieState => ({
    ...state,
    selectedMovie: undefined,
    movies: action.movies
  })),

  on(MovieActions.loadMovieDetailSuccess, (state, action): MovieState => ({
    ...state,
    selectedMovie: action.movie
  }))
);
