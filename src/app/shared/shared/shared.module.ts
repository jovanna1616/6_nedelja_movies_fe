import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieService } from '../services/movie.service';
import { MovieRowComponent } from '../../components/movies/movie-row/movie-row.component';

@NgModule({
  imports: [
    CommonModule
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
