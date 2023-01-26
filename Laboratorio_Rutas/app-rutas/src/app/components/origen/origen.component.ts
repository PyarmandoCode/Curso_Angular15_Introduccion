import { Component } from '@angular/core';

interface Tarjeta {
  nombre:string;
  precio:number;
  cantidad:number;
  imagen:string;
  estado:boolean
}

@Component({
  selector: 'app-origen',
  templateUrl: './origen.component.html',
  styleUrls: ['./origen.component.css']
})
export class OrigenComponent {

  public ArregloTarjetas:Tarjeta[]=[];

  ngOnInit():void {
    this.ArregloTarjetas = [
      {nombre:"Disco1",precio:50,cantidad:200,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1625544457/album_4/ahah_wemspm.jpg",estado:true},
      {nombre:"Disco2",precio:80,cantidad:100,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1625544456/album_4/sigo_bjo7zd.jpg",estado:true},
      {nombre:"Disco3",precio:75,cantidad:80,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1625544456/album_4/viviendo_inrh7v.jpg",estado:true},
      {nombre:"Disco4",precio:25,cantidad:30,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1625544454/album_4/open_bkliy8.jpg",estado:true},
      {nombre:"Disco5",precio:15,cantidad:22,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1625544451/album_4/doce_ykrdpd.jpg",estado:true},

    ]
  }

   



}
