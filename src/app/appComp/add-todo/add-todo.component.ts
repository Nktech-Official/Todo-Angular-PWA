import { Component, OnInit , EventEmitter,Output, Input } from '@angular/core';
import {Todo} from "../../Todo"
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
title:string;
desc:string;
@Input() todos:Todo[]
@Output() todoAdd:EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
onSubmit(){

  const todo:Todo={
   sno:this.todos.length+1,
    title:this.title,
    desc:this.desc,
    active:true
  } ;
 
  this.todoAdd.emit(todo);
}
}
