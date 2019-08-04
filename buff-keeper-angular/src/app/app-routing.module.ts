import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { BuffFormComponent } from './buff-form/buff-form.component';


const routes: Routes = [
  {path: '', component: StatusComponent},
  {path: 'add', component: BuffFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
