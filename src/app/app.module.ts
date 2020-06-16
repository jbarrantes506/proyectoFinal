import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Boton1Component } from './components/boton1/boton1.component';
import { Boton2Component } from './components/boton2/boton2.component';
import { Boton3Component } from './components/boton3/boton3.component';
import { Boton4Component } from './components/boton4/boton4.component';

@NgModule({
  declarations: [
    AppComponent,
    Boton1Component,
    Boton2Component,
    Boton3Component,
    Boton4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
