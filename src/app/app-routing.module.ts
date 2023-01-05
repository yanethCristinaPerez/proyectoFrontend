import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './componentes/pages/home-page/home-page.component';
import { LoginPageComponent } from './componentes/pages/login-page/login-page.component';
import { RegisterPageComponent } from './componentes/pages/register-page/register-page.component';

const routes: Routes = [
  {

    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'login',
    component: LoginPageComponent

  },
  {
    path:'register',
    component:RegisterPageComponent
  },
  {

    path:'home',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
