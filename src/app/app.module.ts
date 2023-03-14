import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { TodoModule } from './todo/todo.module';
import { HttpClientModule } from '@angular/common/http';
import { TodoCompletedComponent } from './todo/todo-completed/todo-completed.component';
import { MakeTodoModule } from './makeTodo/maketodo.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,

  ],
  imports: [
    BrowserModule,
    MakeTodoModule,
    TodoModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
