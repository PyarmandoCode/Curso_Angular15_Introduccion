import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  constructor(private movieService:MovieService) {}
  ngOnInit(): void {
    
  }
  //Nos Susbcribimos para obtener los datos del servicio
  getMovies(searchTerm:string) {
    this.movieService.getMovies(searchTerm).subscribe(data => {
      console.log(data);
    })
  }

}
