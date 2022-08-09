import { MovieImageType } from './movie-image-type';

export interface MovieCastCountry {
  name: string;
  code: string;
  timezone: string;
}

export interface MovieCastPerson {
  id: number;
  url: string;
  name: string;
  gender: string;
  image: MovieImageType;
  country: MovieCastCountry;
}

export interface MovieCast {
  person?: MovieCastPerson;
}
