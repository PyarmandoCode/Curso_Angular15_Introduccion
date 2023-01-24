import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = "interpolation";
  title = 'Adopta a una Mascota';
  descripcion: string='A través de la historia, las mascotas han sido grandes compañeras de la vida de las personas, compartiendo alegrías, pero también ayudando a superar momentos difíciles.';
  img='https://thecatapi.com/api/images/get?format=src&type=gif';
  
}
