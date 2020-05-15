import { Component, OnInit , Input } from '@angular/core';
import { Router} from '@angular/router';
import { RestApiService } from '../movie-repo/movie-repo.component';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
