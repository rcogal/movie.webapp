import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MovieDetail } from '../../../../core/models/movie-detail';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { SearchKeywordService } from '../../../../shared/services/search-keyword.service';
import { MovieState } from '../../../../shared/stores/models/movie.state';
import * as MovieActions from '../../../../shared/stores/movies/movie.actions';
import { getMoveDetail } from '../../../../shared/stores/movies/movie.selector';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent extends BaseComponent implements OnInit {
  public movie$: Observable<MovieDetail>;

  public movieId: string;

  public constructor(
    private readonly store: Store<MovieState>,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly searchKeywordSvc: SearchKeywordService,
  ) {
    super();

    this.movieId = this.route.snapshot.params.movieId;

    this.registerSubscription(
      this.searchKeywordSvc.searchKeyword.subscribe((keyword) => {
        if (keyword) {
          this.router.navigate(['search', keyword]);
        }
      })
    );
  }

  public ngOnInit(): void {
    if (!this.movieId) {
      this.router.navigateByUrl('/');
    }

    this.movie$ = this.store.select(getMoveDetail);

    this.store.dispatch(MovieActions.loadMovieDetail({
      movieId: this.movieId
    }));
  }
}
