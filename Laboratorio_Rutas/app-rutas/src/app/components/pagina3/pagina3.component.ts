import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component {

  listadodiscos:any[]=[
    {nombre:"disco1",estado:"Activo"},
    {nombre:"disco2",estado:"Inactivo"},
    {nombre:"disco3",estado:"Suspendido"},
    {nombre:"disco4",estado:"Activo"},
    {nombre:"disco5",estado:"Inactivo"},
    {nombre:"disco6",estado:"Suspendido"},
    
  ]

}
