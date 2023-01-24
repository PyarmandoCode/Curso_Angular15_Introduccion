import { Component  ,OnInit } from '@angular/core';

interface Cursos {
  nro: number;
  titulo : string;
  subtitulo:string;
  descripcion:string;
  estado:boolean;
  imagen:string;
  
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public ArregloCursos:Cursos[]=[];
  
  ngOnInit(): void {
    this.ArregloCursos =  [
      {nro:1,titulo:"Instalacion de Angular",subtitulo:"Angular 15",descripcion:"este es un curso nuevo de angular",estado:true,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1661263073/angular/github2_braqwi.png"},
      {nro:2,titulo:"Creacion de Compoenentes",subtitulo:"Angular 15",descripcion:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen",estado:true,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1661263073/angular/github1_txnkpt.png"},
      {nro:3,titulo:"Uso de TypeScript",subtitulo:"Angular 15",descripcion:"este es un curso nuevo de angular",estado:true,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1661263073/angular/github1_txnkpt.png"},
      {nro:4,titulo:"Routing",subtitulo:"Angular 15",descripcion:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen",estado:true,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1661263073/angular/github3_ldzgs9.png"},
      
    ]    
  }
}
