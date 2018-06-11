import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RunComponent } from './run/run.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { TodoListWithServiceComponent } from './todo-list-with-service/todo-list-with-service.component';
import { TodoService } from './todo.service';
import { TodoListOptimisticComponent } from './todo-list-optimistic/todo-list-optimistic.component';

@NgModule({
  imports: [
    CommonModule,

    HttpModule,
    FormsModule
  ],
  exports: [
    RunComponent
  ],
  providers: [
    TodoService
  ],
  declarations: [RunComponent, TodoListComponent, TodoListWithServiceComponent, TodoListOptimisticComponent]
})
export class TodoModule { }
