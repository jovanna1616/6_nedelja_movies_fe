import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../shared/model/movie';
import { Router } from '@angular/router';
import {  MovieService } from '../../../shared/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  private newMovie: Movie = new Movie();

  constructor(private movieService: MovieService, private router: Router) { }

  submitMovie(movie: Movie){
   this.movieService.addMovie(movie).subscribe();
   this.newMovie = new Movie();
   this.router.navigate(['/movies']);
  }

  ngOnInit() {
  }
}