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
          movies.forEach(movie => {
            this.movies.push(new Movie(
              movie.id,
              movie.name,
              movie.director,
              movie.imageUrl,
              movie.duration,
              movie.releaseDate,
              movie.genres
            ));
          });
        });
          o.next(this.movies);
          return o.complete();
        });
    }

    public addMovie(movie: Movie)
    {
      return new Observable((o: Observer<any>) => {
        this.http.post('http://localhost:8000/api/movies', {
          'name': movie.name,
          'director': movie.director,
          'image_url': movie.imageUrl,
          'duration': movie.duration,
          'release_date': movie.releaseDate,
          'genres': movie.genres
        })
        .subscribe(
          (movie: any) => {
            let newMovie = new Movie(
              movie.id, 
              movie.name, 
              movie.director, 
              movie.imageUrl, 
              movie.duration, 
              movie.releaseDate, 
              movie.genres
            );
            this.movies.push(newMovie);
            o.next(this.movies);
            return o.complete();
          }
        );
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
