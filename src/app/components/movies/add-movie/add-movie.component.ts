import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Movie } from '../../../shared/model/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

	@Output() onSubmit = new EventEmitter<Movie>();
	private newMovie: Movie = new Movie();

  constructor() { }

  submitMovie(movie: Movie) {
  	this.onSubmit.emit(movie);
    console.log(movie);
  	console.log(this.newMovie);
  	this.newMovie = new Movie();
  	// console.log(this.newMovie);
  }

  ngOnInit() {
  }














}
