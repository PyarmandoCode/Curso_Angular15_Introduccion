import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina3Component } from './components/pagina3/pagina3.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { Pagina4Component } from './components/pagina4/pagina4.component';
import { OrigenComponent } from './components/origen/origen.component';


@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    LoginComponent,
    PagenotfoundComponent,
    Pagina4Component,
    OrigenComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
