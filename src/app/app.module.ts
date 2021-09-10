import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './Header/navbar/navbar.component';
import { TodosComponent } from './appComp/todos/todos.component';
import { TodoItemComponent } from './appComp/todo-item/todo-item.component';
import { AddTodoComponent } from './appComp/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './appComp/about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    PagenotfoundComponent
  ],
  imports: [
    HttpClientModule ,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
