import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Movie } from '../../../shared/model/movie';
import { MovieService } from '../../../shared/services/movie.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent implements OnInit {
	// za razmenu info iz parent movies componente
	@Input() movie: Movie;
	@Input() selectedAll;
	@Input() selectedSome;
	@Input() selectAllCounter;
	@Input() deselectAllCounter;
	@Output() onSelect = new EventEmitter<Movie>();

	//  po default-u nista nije selectovano
	private selected: boolean = false;

  

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  // ako je izabran od strane parent-a selected se menja na true
    ngOnChanges(changes) {
        if (this.selectedSome === false) {
            this.selected = this.selectedAll;
        }
    }

  // onesposobljavanje select button na click
  selectMovie(movie: Movie) {
    this.onSelect.emit(movie);
    this.selected = true;
  }

}
