import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from 'src/app/componentes/login-page/login-page.component';
import { RegisterPageComponent } from 'src/app/componentes/register-page/register-page.component';

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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
