import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-completed',
  templateUrl: './todo-completed.component.html',
  styleUrls: ['./todo-completed.component.scss']
})
export class TodoCompletedComponent {

  userID!: number;
  todos$!: Observable<Todo[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos$ = this.todoService.getCompletedTodos();
  }
}
