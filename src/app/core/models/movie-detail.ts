import { MovieCast } from './movie-cast';
import { MovieImageType } from './movie-image-type';

export interface MovieRating {
  average: number;
}

export interface MovieDetail {
  id: number;
  name: string;
  url: string;
  type: string;
  language: string;
  genres: string[];
  rating: MovieRating;
  summary: string;
  image: MovieImageType;
  runtime: number;

  // `_embedded` field is an optional property that can contains the specified embedded name in the query
  _embedded?: MovieCast;
}
