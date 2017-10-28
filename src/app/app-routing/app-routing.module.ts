import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from '../components/movies/movies.component';
import { SearchPageComponent } from '../components/search/search-page/search-page.component';
import { AddMovieComponent } from '../components/movies/add-movie/add-movie.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'search/:term',
    component: SearchPageComponent
  },
  {
    path: 'add',
    component: AddMovieComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
