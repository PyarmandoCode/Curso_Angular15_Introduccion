import { Component,ElementRef, ViewChild } from '@angular/core';

interface estructura_tareas {
  tarea:string;
  estado:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';
  mistareas:estructura_tareas[]=[];

  @ViewChild('todo') todo!:ElementRef;
  //Metodo Para Agregar Dinamicamente elementos a la Lista

  addtodo(value:string) {
    //Creando un Objeto info y recogiendo valores del Html
    var info: estructura_tareas ={tarea:value,estado:'nocompletado'}
    if (value !=="") {
      this.mistareas.push(info)
      this.todo.nativeElement.value="";
      console.log(this.mistareas)
    }
    else {
      alert("Debe Ingresar una Tarea")
    }
  }

  //Metodo Para Eliminar Elementos de la Lista
  deleteitem(value:string) {
    for(let i=0;i<=this.mistareas.length;i++) {
      if (value == this.mistareas[i].tarea) {
        this.mistareas.splice(i,1)
      }
    }
  }

  //Metodo Para Completar la Tarea
  completeitem(value:string) {
    for (let i=0;i<=this.mistareas.length;i++) {
      if (value == this.mistareas[i].tarea) {
        this.mistareas[i].estado="completado"
      }
    }
  }
}
