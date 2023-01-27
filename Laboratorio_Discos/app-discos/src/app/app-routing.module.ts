import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DetalleComponent } from './components/detalle/detalle.component';


const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'paginahome',component:HomeComponent},
 {path:'paginaproductos',component:ProductosComponent},
 {path:'paginaabout',component:AboutComponent},
 {path:'detailproducto/:id',component:DetalleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
