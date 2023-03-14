import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from './todo';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoUrl = 'https://jsonplaceholder.typicode.com/todos/';
  constructor(
  
    private http: HttpClient
    ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getTodos() : Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todoUrl);
  }

  getTodo(id:number| string) {
    const url = `${this.todoUrl}/${id}`;
    return this.http.get<Todo>(url);
  }

  getCompletedTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl).pipe(
      map((todos) => todos.filter((todo) => todo.completed))
    );
  }


}
