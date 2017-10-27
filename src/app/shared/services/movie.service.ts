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
    return new Observable((o: Observer<any>) => {
      this.http.get('http://localhost:8000/api/movies')
        .subscribe(
        (movies: Array<Movie>) => {
          movies.forEach(m => {
            this.movies.push(new Movie(
              m.id,
              m.name,
              m.director,
              m.imageUrl,
              m.duration,
              m.releaseDate,
              m.genres
            ));
          });
        });
          o.next(this.movies);
          return o.complete();
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
