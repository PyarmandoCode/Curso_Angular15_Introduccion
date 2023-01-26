import { Component } from '@angular/core';
import {Subject} from 'rxjs'

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component {

  constructor() {

    //metodo que se va activar al iniciar la pagina
    this.subscribe1;
    

  }

  //Objetos que se actualizarn de manera asincrona
  subscription1:any;
  subscription2:any;


  subscribe1():void{
    //enviar mensajes de alerta
    this.subscription1="ya encontyre la informacion"
    this.subscription2="usuario sin transacciones"

  }

}
