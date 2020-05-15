import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,ModuleWithProviders} from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DemoMaterialModule } from './material-module';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { MovieCreateComponent } from './movie/movie-create/movie-create.component';
import { HttpClientModule } from '@angular/common/http';
import { RatingStarComponent } from './star/star.component'
@NgModule({
  declarations: [
    AppComponent, FormComponent, FormComponent, MovieListComponent, MovieEditComponent, MovieCreateComponent, RatingStarComponent
  ],
  imports: [ CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    HttpClientModule

  ], exports: [RatingStarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
