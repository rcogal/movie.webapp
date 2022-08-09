import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../shared/shared.module';
import { MovieEffects } from '../../shared/stores/movies/movie.effects';
import { movieReducer } from '../../shared/stores/movies/movie.reducers';
import { FormGroupDescriptonComponent } from './components/form-group-descripton/form-group-descripton.component';
import { MovieImageDetailComponent } from './components/movie-image-detail/movie-image-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MovieSearchComponent } from './pages/movie-search/movie-search.component';
import { MovieSearchResultsComponent } from './pages/movie-search-results/movie-search-results.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('movies', movieReducer),
    EffectsModule.forFeature([MovieEffects]),

    MovieRoutingModule,
    SharedModule,
  ],

  declarations: [
    FormGroupDescriptonComponent,
    MovieSearchComponent,
    MovieDetailComponent,
    MovieSearchResultsComponent,
    MovieImageDetailComponent,
    MovieListComponent,
  ],
})
export class MovieModule { }
