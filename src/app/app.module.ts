import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './componentes/auth/login.component';
import { RegistroComponent } from './componentes/auth/registro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './compartidos/header/header.component';
import { FooterComponent } from './compartidos/footer/footer.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { ItemComponent } from './componentes/item/item.component';
import { HomeComponent } from './componentes/home/home.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { MasBuscadosComponent } from './componentes/masBuscados/mas-buscados.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    FooterComponent,
    CatalogoComponent,
    ItemComponent,
    HomeComponent,
    BusquedaComponent,
    MasBuscadosComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
