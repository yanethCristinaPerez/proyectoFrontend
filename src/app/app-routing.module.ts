import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './compartidos/footer/footer.component';
import { HeaderComponent } from './compartidos/header/header.component';
import { LoginComponent } from './componentes/auth/login.component';
import { RegistroComponent } from './componentes/auth/registro.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { HomeComponent } from './componentes/home/home.component';
import { ItemComponent } from './componentes/item/item.component';

const routes: Routes = [
  {  path:'', pathMatch:'full', redirectTo:'login' },
  {  path: 'login', component: LoginComponent},
  {  path:'registro',component: RegistroComponent},
  {  path:'header',component: HeaderComponent},
  {  path:'footer',component: FooterComponent},
  {  path:'catalogo/:genero',component: CatalogoComponent},
  {  path:'item/:id',component: ItemComponent},
  {  path:'home',component: HomeComponent},
  {  path:'busqueda/:termino',component: BusquedaComponent},
  {  path:'carrito',component: CarritoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
