import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Todo } from './todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoUrl = 'http://localhost:8000/api/Todos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addTodo(todo: Todo): void {
    console.log('add service');
    this.http.post<Todo>(this.todoUrl, todo, this.httpOptions).subscribe(data => {
        console.log('something happened');
    })
  }

  getTodos(): Observable<Todo[]> {
    console.log('get service');
    return this.http.get<Todo[]>(this.todoUrl);
  }

  putTodos(todo: Todo): void {
    console.log('put service');
    this.http.put<Todo>(this.todoUrl + '/' + todo.id, todo, this.httpOptions).subscribe(data => {
      console.log('put happened');
    });
  }
}
