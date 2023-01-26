import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.component.html',
  styleUrls: ['./pagina4.component.css']
})
export class Pagina4Component {

  //Definiendo la Variable
  id:any="";

  //Creando los Objetos para utilizar las propiedades y obtener el valor deseado
  constructor(private router:Router,private route:ActivatedRoute) {}

  //Creando un modulo inicial para setear el valor en la variable
  ngOnInit():void {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  irpaginatres() {
    this.router.navigate(['/pagina3'])
  }

}
