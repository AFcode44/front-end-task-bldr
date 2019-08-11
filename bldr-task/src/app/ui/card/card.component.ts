import { Component, OnInit, Input } from '@angular/core';
import { MoviesInterface } from 'src/app/shared/services/movies/movies.interface';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { SelectMovie } from 'src/app/movie-details/movie-details.actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public myImage;
  public movieInfo: MoviesInterface;
  public myNumber: number;
  public detailsVisible = false;
  public isDetailsSelected$: Observable<boolean>;

  @Input() public set movieDesc(movieData: MoviesInterface) {
    this.movieInfo = movieData;
  }

  @Input() public set movieNumber(movieNr: number) {
    this.myNumber = ++movieNr;
  }
  constructor(private readonly store: Store<AppState>) { }

  ngOnInit() {
  }

  public onCardClick(): void {
    this.detailsVisible = true;
    this.store.dispatch(new SelectMovie({ movie: this.movieInfo }));
  }
}
