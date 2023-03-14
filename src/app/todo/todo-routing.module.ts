import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodolistComponent } from './todolist/todolist.component';

import { TodoCompletedComponent } from './todo-completed/todo-completed.component';
import { TododetailsComponent } from './tododetails/tododetails.component';
import { TodolistidComponent } from './todolistid/todolistid.component';
const routes: Routes = [  
  //{ path: '', component: AppComponent, pathMatch: 'full' },
  { 
    path: 'Todos', component: TodolistComponent, 
    children: [
      { path: 'CompletedTasks', component: TodoCompletedComponent },
    ]
  },
  { path: 'Todo/:id', component: TododetailsComponent},
  { path: 'filter', component: TodolistidComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
