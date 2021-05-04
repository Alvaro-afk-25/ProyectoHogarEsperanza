import { ActividadPersonaComponent } from './components/actividad-persona/actividad-persona.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'actividad-persona',
    component: ActividadPersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
