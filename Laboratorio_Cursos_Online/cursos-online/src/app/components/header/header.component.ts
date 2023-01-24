import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title ="Esto es Interpolacion";
//Tipo de datos en TS
  //Numericos
  precio:number=6.20;
  nuevo_precio:number=this.precio+23;
  //String
  color:string="blue";
  nombre:string="Angular 15";
  session:string='Session' + this.nombre;
  //Boolean
  estado:boolean=false;
  //Variables cuyo tipo desconocemos
  result:any='la compilacion fue correcta';
  //Array
  list:number[]=[1,2,3];
  //POO
  valor:any={curso:'Angular',version:'type 15',interfaz:'Angular Cli'}





}
