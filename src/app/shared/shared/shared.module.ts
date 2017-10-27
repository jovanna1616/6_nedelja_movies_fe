import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MovieService } from '../services/movie.service';
import { MovieRowComponent } from '../../components/movies/movie-row/movie-row.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
  	MovieRowComponent,
  ],
  exports: [
  	MovieRowComponent
  ],
  providers: [
  	MovieService,
  ]
})
export class SharedModule { }
