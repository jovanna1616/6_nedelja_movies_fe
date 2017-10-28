import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MovieService } from '../services/movie.service';
import { MovieRowComponent } from '../../components/movies/movie-row/movie-row.component';
import { AddMovieComponent } from '../../components/movies/add-movie/add-movie.component';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
  	MovieRowComponent,
    AddMovieComponent
  ],
  exports: [
  	MovieRowComponent,
    AddMovieComponent,
  ],
  providers: [
  	MovieService,
  ]
})
export class SharedModule { }
