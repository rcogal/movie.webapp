import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MovieState } from '../models/movie.state';

const getProductFeatureState = createFeatureSelector<MovieState>('movies');

export const getMoves = createSelector(
  getProductFeatureState,
  (state) => state.movies
);

export const getMoveDetail = createSelector(
  getProductFeatureState,
  (state) => state.selectedMovie
);

