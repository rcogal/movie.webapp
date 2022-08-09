import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MovieSearchComponent } from './pages/movie-search/movie-search.component';
import { MovieSearchResultsComponent } from './pages/movie-search-results/movie-search-results.component';

const routes: Routes = [
  {
    path: '',
    component: MovieSearchComponent,
  },
  {
    path: 'search/:search',
    component: MovieSearchResultsComponent,
  },
  {
    path: 'movie/:movieId',
    component: MovieDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
