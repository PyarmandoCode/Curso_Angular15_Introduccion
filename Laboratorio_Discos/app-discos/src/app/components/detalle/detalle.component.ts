import { Component  } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent  {

  id:any="";
  infodisco:any[]=[];

  constructor(private router:Router,private route:ActivatedRoute){}

  ngOnInit():void {
    //Almacena el disco que quiero buscar
    this.id=this.route.snapshot.paramMap.get("id");
    this.getDiscosid(this.id);
  }

  //Esta Funcion me permite buscar el disco deseado de acuerdo al valor del parametro id
  getDiscosid (id:String) {
    //Arreglo donde buscara el disco
    const discos = [
        {codigo:'100',nombre:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",precio:50,cantidad:200,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1625784151/album_7/reanim_glyvdf.jpg",estado:'Suspendido'},
        {codigo:'200',nombre:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",precio:20,cantidad:120,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1625784147/album_7/mundo_rxuv28.jpg",estado:'Activo'},
        {codigo:'300',nombre:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",precio:33,cantidad:80,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1625784150/album_7/sandpa_qmci2i.jpg",estado:'Activo'},
        {codigo:'400',nombre:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",precio:80,cantidad:77,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1625784149/album_7/padrino_abvjim.jpg",estado:'Activo'},
        {codigo:'500',nombre:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",precio:10,cantidad:29,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1625784144/album_7/house_ihxyyk.jpg",estado:'Inactivo'},
        {codigo:'600',nombre:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",precio:19,cantidad:120,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1625784142/album_7/alegria_igm0je.jpg",estado:'Inactivo'},
    ]
    
    //Realizo con la funcion Find la busqueda del disco
    const result = discos.find(e => e.codigo === id);
    //Llenar el Arreglo con la informacion del Disco seleccionado
    this.infodisco.push(result);
    // Retornar ese arreglo con la informacion ya llena
    return this.infodisco;

  }

  irpaginaproductos() {
    this.router.navigate(['/paginaproductos'])
  }


}
