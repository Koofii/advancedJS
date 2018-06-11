import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoError, TodoErrorType } from '../todoError';

@Component({
  selector: 'todo-list-with-service',
  templateUrl: './todo-list-with-service.component.html',
  styleUrls: ['./todo-list-with-service.component.css']
})
export class TodoListWithServiceComponent implements OnInit {


  todos = [];

  constructor(private todoService: TodoService) { }

  cancel(todo){
    todo.isEditing = false;
    todo.updatedTitle = todo.title
  }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe(
        todos => {
          this.todos = todos.map(todo => {
            return {
              ...todo,

              isEditing: false,
              updatedTitle: todo.title
            };
          });
        },
        (error: TodoError) => {
          if(error.type === TodoErrorType.NOT_FOUND){
            //...
          } else {
            console.log('Unexpected Error')
          }
        }
      )
  }

  createTodo(title) {
    this.todoService.createTodo(title)
      .subscribe(
        newTodo => {
          newTodo.isEditing = false;
          newTodo.updatedTitle = title;

          this.todos = [newTodo, ...this.todos]
        },
      )
  }
  updateTodo(todo){
    this.todoService.updateTodo(todo.id, todo.updatedTitle)
      .subscribe(
        () => {
          todo.title = todo.updatedTitle;
          this.cancel(todo)
        },
        (error: TodoError) => {
          if(error.type === TodoErrorType.NOT_FOUND){
            console.log("Can't update created todo")
          } else {
            throw error;
          }
        }
      )
  }

  deleteTodo(id){
    this.todoService.deleteTodo(id)
      .subscribe(
        () => {
          this.todos = this.todos.filter(todo => todo.id !== id)
        },
        (error: TodoError) => {
          if(error.type === TodoErrorType.NOT_FOUND){
            console.log("Can't delete created Todo")
          } else {
            throw error;
          }
        }
      )
  }

}
