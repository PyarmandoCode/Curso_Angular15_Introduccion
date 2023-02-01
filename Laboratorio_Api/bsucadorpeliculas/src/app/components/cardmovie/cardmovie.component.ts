import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-cardmovie',
  templateUrl: './cardmovie.component.html',
  styleUrls: ['./cardmovie.component.css']
})
export class CardmovieComponent implements OnInit {

  @Input('movie') movie:any;

  constructor() { }

  ngOnInit(): void {
  }

  getImagen() {
    return this.movie.Poster !=="N/A" ? this.movie.Poster :'https://via.placeholder.com/400'

  }

}
