import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { MovieCreateComponent } from '../movie/movie-create/movie-create.component';
import { RestApiService } from '../movie/movie-repo/movie-repo.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  options: String[];
  myForm: FormGroup;
  constructor(private fb: FormBuilder, public restAPI: RestApiService
  ) { }

  ngOnInit(): void {
    this.loadGenres();
    this.myForm = this.fb.group({
      movie_name: '',
      movie_genre: '',
      movie_length: '',
      movie_thumbnail_picture: '',
      movie_rating: '',
      movie_description: '',
      movie_premier : Date()
    })


   // this.myForm.valueChanges.subscribe(console.log);
  }


  processFile(image: any) {
    console.log(image);
  }


  loadGenres() {
    this.restAPI.getGenres().subscribe((data:String[]) => {
      this.options = data;

    });
  }

  public onRating(rating : number): void {
    console.log(rating);
  }

  @Output() onChange = new EventEmitter()
  onSubmit() {
    this.onChange.emit(this.myForm.value);
    console.log("Succes")
  }
}
