import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Movie } from './movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestApiService{

  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  ngOnInit(): void {
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiURL + '/movies');
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(this.apiURL + '/movies/' + id);
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiURL + '/movies', JSON.stringify(movie), this.httpOptions);
  }

  updateMovie(id: string, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(this.apiURL + '/movies/' + id, JSON.stringify(movie), this.httpOptions);
  }

  deleteMovie(id: string) {
    return this.http.delete(this.apiURL + '/movies/' + id, this.httpOptions);
  }

  getGenres(): Observable<String[]> {
    return this.http.get<String[]>(this.apiURL + '/genres');
  }
}
