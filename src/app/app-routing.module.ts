import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieCreateComponent } from './movie/movie-create/movie-create.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-movie' },
  { path: 'create-movie', component: MovieCreateComponent },
  { path: 'movies-list', component: MovieListComponent },
  { path: 'movie-edit/:id', component: MovieEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
