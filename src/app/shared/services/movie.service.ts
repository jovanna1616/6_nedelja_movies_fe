import { Injectable } from '@angular/core';
import { moviesExample } from '../example';
import {  Movie } from '../model/movie';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class MovieService {

  private movies: Array<Movie> = []; // prazan niz;treba da se ucitava iz examples.ts

	constructor() {

		this.movies = moviesExample.map((movie) => {
      return new Movie(
        movie.id,
        movie.name,
        movie.director,
        movie.imageUrl,
        movie.duration,
        new Date(movie.releaseDate),
        movie.genres
      );
    });
	}
	getMovies(): Observable<Array<Movie>> {

 		 return new Observable(observer => {
 				observer.next(this.movies);
 			});
       // return Observable.of(this.movies);
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

  private totalPages;
  private startPage;
  private startIndex;
  private endIndex;
  private pages;
  private totalItems;
  // pagination
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10): Observable<any> {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);
 
        let startPage: number, endPage: number;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
 
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
 
        // create an array of pages to ng-repeat in the pager control
        const range = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start);
        let pages = range(startPage, endPage + 1);
 
        // return object with all pager properties required by the view
        let allData =  {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };

        return new Observable(observer => {
          observer.next(allData);
        });
    }
	


}
