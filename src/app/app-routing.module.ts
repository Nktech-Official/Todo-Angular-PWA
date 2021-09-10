import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './appComp/about/about.component';
import { TodosComponent } from './appComp/todos/todos.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"",component:TodosComponent},
  {path:"about",component:AboutComponent},
  {
    path:"**",
    component: PagenotfoundComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
