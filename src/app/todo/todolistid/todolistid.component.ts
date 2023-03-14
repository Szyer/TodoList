import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Todo } from '../todo';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolistid',
  templateUrl: './todolistid.component.html',
  styleUrls: ['./todolistid.component.scss']
})
export class TodolistidComponent {
  todos$!: Observable<Todo[]>;
  userID!: number;
  constructor(
    private todoService: TodoService,
    private router : Router) { }

    ngOnInit() {
      this.todos$ = this.todoService.getTodos();
    }

  goBack(): void {
    this.router.navigateByUrl('/');
  }
}
