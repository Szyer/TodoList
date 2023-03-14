import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  buttonText = 'Show Completed Tasks';
  todos$!: Observable<Todo[]>;
  showAllTodoList = true;
  constructor(
    private todoService: TodoService,
    private router : Router) { }

  ngOnInit() {
    this.todos$ = this.todoService.getTodos();
  }

  goBack(): void {
    this.router.navigateByUrl('/');
  }

  toggleAllTasks() {
      if (this.showAllTodoList) {
        this.todos$ = this.todoService.getCompletedTodos();
        this.buttonText = 'Show All Tasks';
      } else {
        this.todos$ = this.todoService.getTodos();
        this.buttonText = 'Show Completed Tasks';
      }
      this.showAllTodoList = !this.showAllTodoList;
    }
  }
 

