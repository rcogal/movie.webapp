import { MovieDetail } from '../../../core/models/movie-detail';

export interface MovieState {
  movies: MovieDetail[];
  selectedMovie: MovieDetail | undefined;
}
