import { Injectable } from '@angular/core';
import {  Movie } from '../model/movie';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

  private movies: Array<Movie> = [];

  constructor(private http: HttpClient) {	}

  public getMovies() {
    return this.http.get<any>('http://localhost:8000/api/movies');
  }

  public addMovie(movie: Movie) {
    return this.http.post('http://localhost:8000/api/movies', {
      'name': movie.name,
      'director': movie.director,
      'image_url': movie.imageUrl,
      'duration': movie.duration,
      'release_date': movie.releaseDate,
      'genres': movie.genres
    });
  }


  searchMovies(term): Observable<Array<Movie>> {
    const foundedMovies = this.movies.filter((movie: Movie) => {
      return movie.name.includes(term);
    });
     
    return new Observable(observer => {
      observer.next(foundedMovies);
    });
    // return Observable.of(foundedMovies);
  }
}
