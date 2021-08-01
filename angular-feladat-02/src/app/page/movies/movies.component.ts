import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { getItems } from 'src/app/store/movie/MovieActions';
import { selectItems } from 'src/app/store/movie/MovieReducers';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {


  list$: Observable<Movie[]> = new Observable();

  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getItems());
    this.list$ = this.store.pipe(select(selectItems));
  }
}
