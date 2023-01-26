import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component {

  //Variable de entrada que espera recibir informacion de otro componente
  //En este caso es del componente origen
  @Input() dataEntrante:any;

}
