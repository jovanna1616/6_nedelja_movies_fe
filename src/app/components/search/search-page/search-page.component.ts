import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../shared/services/movie.service';
import { Movie } from '../../../shared/model/movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
	private movies: Array<Movie>;
  private term: string;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.movieService.searchMovies(params['term']).subscribe(foundedMovies => {
        this.movies = foundedMovies;
        this.term = params['term'];
      });
  	});
    if (this.movies.length === 0) {
      alert("There is no movie You searched");
      this.router.navigate(['movies']);}
  }

}
