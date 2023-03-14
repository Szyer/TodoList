import { Component } from '@angular/core';
import { Todo } from '../todo';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-tododetails',
  templateUrl: './tododetails.component.html',
  styleUrls: ['./tododetails.component.scss']
})
export class TododetailsComponent {
  todo$!: Observable<Todo>;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,

  ) {}

  ngOnInit(): void {
    this.todo$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.todoService.getTodo(parseInt(params.get('id') || '0', 10))
      )
    );
  }
}
