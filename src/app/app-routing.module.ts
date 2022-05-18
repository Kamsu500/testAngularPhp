import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
