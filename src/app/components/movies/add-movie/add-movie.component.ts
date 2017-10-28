import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Movie } from '../../../shared/model/movie';
import { Router } from '@angular/router';
import {  MovieService } from '../../../shared/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

	@Output() onSubmit = new EventEmitter<Movie>();
	private newMovie: Movie = new Movie();

  constructor(private movieService: MovieService, private router: Router) { }

  // submitMovie(movie: Movie) {
  // 	this.onSubmit.emit(movie);
  //   console.log(movie);
  // 	console.log(this.newMovie);
  // 	this.newMovie = new Movie();
  // 	// console.log(this.newMovie);
  // }
  submitMovie(movie: Movie) {
    this.movieService.addMovie(movie).subscribe();
    console.log('sad sam u movie componenti');
    this.router.navigate(['/movies']);
 }

  ngOnInit() {
  }














}
