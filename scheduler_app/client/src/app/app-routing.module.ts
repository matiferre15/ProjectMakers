import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarioComponent} from './components/calendario/calendario.component'
import { AgendaComponent } from './components/agenda/agenda.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/calendario',
    pathMatch: 'full',
  },
  {
    path: 'calendario',
    component: CalendarioComponent
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
