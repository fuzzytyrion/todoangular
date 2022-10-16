import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  add(name: string): void {
    console.log('chorble');
    this.todoService.addTodo({ name } as Todo);
  }
}
