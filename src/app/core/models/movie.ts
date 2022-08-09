// NOTE: a lot of fields for the show model but I only embbed the fields that are being used in the app

import { MovieDetail } from './movie-detail';

export interface Movie {
  score: number;
  show: Omit<MovieDetail, '_embedded'>;
}
