import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    console.log('chorble-inho');
    this.todoService.getTodos().subscribe(todos => {
        this.todos = todos;
      });
  }

  complete(todo: Todo): void {
    console.log('put chorble');
    todo.completed = true;
    this.todoService.putTodos(todo);
  }
}
