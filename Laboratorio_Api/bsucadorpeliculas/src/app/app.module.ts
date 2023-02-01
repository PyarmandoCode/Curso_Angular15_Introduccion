import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CardmovieComponent } from './components/cardmovie/cardmovie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CardmovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
