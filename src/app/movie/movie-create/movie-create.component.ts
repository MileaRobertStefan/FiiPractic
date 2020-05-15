import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../movie-repo/movie-repo.component';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-controller',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  @Input() movieDetails = {
    id: 0,
    movie_name: '',
    movie_genre: '',
    movie_length: 0,
    movie_thumbnail_picture: '',
    movie_rating: 0,
    movie_description: '',
    movie_premier:new Date()
  };

  clickEventsubscription:Subscription;

  constructor(
    public restAPI: RestApiService,
    public router: Router,
  ) {
  
  }

  ngOnInit(): void {
  }

  addMovie(  a:any ) {
    this.movieDetails = a;
    console.log(a);
    console.log("test 2")
    this.restAPI.createMovie(this.movieDetails).subscribe((data: {}) => this.router.navigate(['/movies-list']));
  }

}
