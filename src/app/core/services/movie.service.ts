import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Movie } from '../models/movie';
import { MovieDetail } from '../models/movie-detail';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly endpoint: string = environment.tvMaze.api;

  public constructor(
    private readonly http: HttpClient,
  ) {}

  public searchMovies(query: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.endpoint}/search/shows?q=${query}`);
  }

  public movieInfo(id: string): Observable<MovieDetail> {
    // Future: allow the embed to be dynamic based on function parameters
    return this.http.get<MovieDetail>(`${this.endpoint}/shows/${id}?embed=cast`);
  }

  public paginatedShows(page: number = 1): Observable<MovieDetail[]> {
    return this.http.get<MovieDetail[]>(`${this.endpoint}/shows?page=${page}`);
  }
}
