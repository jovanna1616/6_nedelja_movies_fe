import { Component, OnInit, Injectable } from '@angular/core';
import {  MovieService } from '../../shared/services/movie.service';
import { Movie } from '../../shared/model/movie';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	private movies: Array<Movie>;

	private count:number = 0;
	// opcije kad su svi markirani ili samo neki
	public selectedAll = false;
  public selectedSome = false;


  constructor(private movieService: MovieService, private router: Router) {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;

      console.log(this.movies);
      console.log(this.movies.length);
   },
   (err: HttpErrorResponse) => {
     alert(`Backend returned code ${err.status} with message: ${err.error}`);
    }
   );
 }

  ngOnInit() {  }

  onSelect(selected) {
  	this.count++;
  }
  selectAllCounter() {
        this.count = this.movies.length;
    }

	deselectAllCounter() {
	    this.count = 0;
	}
	//https://stackoverflow.com/questions/43311121/sort-an-array-of-objects-in-typescript
	sortingMoviesByNameAsc() {
		this.movies.sort((m1:Movie, m2:Movie) => {
      if (m1['name'] < m2['name']) {
       return -1;
   	  }
      if (m1['name'] > m2['name']) {
      	return 1;
      }
      return 0;
    });
	}

	sortingMoviesByNameDesc() {
		this.movies.sort((m1:Movie, m2:Movie) => {
      if (m1['name'] > m2['name']) {
       return -1;
   	  }
      if (m1['name'] < m2['name']) {
      	return 1;
      }
      return 0;
    });

	}
	sortingMoviesByDuration() {
		this.movies.sort((m1:Movie, m2:Movie) => {
      if (m1['duration'] < m2['duration']) {
       return -1;
   	  }
      if (m1['duration'] > m2['duration']) {
      	return 1;
      }
      return 0;
    });
	}

}
