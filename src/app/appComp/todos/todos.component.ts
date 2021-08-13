import { Component, OnInit } from '@angular/core';
import {Todo} from "../../Todo"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title = 'Todo-App';
  todos:Todo[];
  localItem:string;
  constructor() {
    this.localItem=localStorage.getItem('todos');
    if(this.localItem==null){

      this.todos=[]
    }else{
      this.todos=JSON.parse(this.localItem)
    }
   }
  

  ngOnInit(): void {
  }
  deletTodo(todo: Todo){
    const index=this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
  todoAdd(todo: Todo){
   
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
  toggelDone(todo: Todo){
   
    const index=this.todos.indexOf(todo)
    this.todos[index].active= !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
}
