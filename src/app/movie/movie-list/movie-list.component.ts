import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../movie-repo/movie-repo.component';
import { Movie } from './../movie-repo/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  Movie: any = [];


  constructor(public restAPI: RestApiService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    return this.restAPI.getMovies().subscribe((data: Movie[]) => {
      data.sort((a, b) => { if (a.movie_genre > b.movie_genre) return 1; else return -1; });
      this.Movie = data;
    });
  }

  deleteMovie(id: string) {
    this.restAPI.deleteMovie(id).subscribe(() => {
      this.loadMovies();
    });
  }

}
