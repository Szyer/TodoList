import { NgModule } from '@angular/core';

import { TodolistComponent } from './todolist/todolist.component';

import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { TodolistidComponent } from './todolistid/todolistid.component';
import { TododetailsComponent } from './tododetails/tododetails.component';
import { FormsModule } from '@angular/forms';
import { TodoCompletedComponent } from './todo-completed/todo-completed.component';

@NgModule({
  declarations: [
    TodolistComponent,
    TododetailsComponent,
    TodolistidComponent,
    TodoCompletedComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule
  ],
 
})
export class TodoModule { }
