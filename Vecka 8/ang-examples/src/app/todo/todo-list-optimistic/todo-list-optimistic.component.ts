import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoError, TodoErrorType } from '../todoError';

@Component({
  selector: 'todo-list-optimistic',
  templateUrl: './todo-list-optimistic.component.html',
  styleUrls: ['./todo-list-optimistic.component.css']
})
export class TodoListOptimisticComponent implements OnInit {


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

    //...
    // Optimistic update: Create new todo and add to list on page BEFORE
    // calling the remote API
    const newTodo = {
      title,
      id: undefined, // detta är för att typescript inte ska gnälla där nere när vi destructar responsen!
      isEditing: false,
      updatedTitle: title
    };

    //...

    this.todos = [newTodo, ...this.todos]

    this.todoService.createTodo(title)
      .subscribe(
        ({ id }) => {
          newTodo.id = id;
        },
        (error: TodoError) => {
          this.todos = this.todos.slice(1);

          if (error.type === TodoErrorType.UNKNOWN){
            throw error;
          }
        }
      )
  }
  updateTodo(todo){
    const titleSaved = todo.title;
    todo.title = todo.updatedTitle;

    this.cancel(todo)

    this.todoService.updateTodo(todo.id, todo.updatedTitle)
      .subscribe(
        () => {

        },
        (error: TodoError) => {
          todo.title = titleSaved;
          todo.updatedTitle = todo.title;

          if(error.type === TodoErrorType.NOT_FOUND){
            console.log("Can't update created todo")
          } else {
            throw error;
          }
        }
      )
  }

  deleteTodo(todo){
    const todoIndex = this.todos.indexOf(todo);
    const todoBackup = this.todos;

    this.todos = [
      ...this.todos.slice(0, todoIndex),
      ...this.todos.slice(todoIndex + 1)
    ];

    this.todoService.deleteTodo(todo.id)
      .subscribe(
        () => {

        },
        (error: TodoError) => {

          this.todos = todoBackup;

          if(error.type === TodoErrorType.NOT_FOUND){
            console.log("Can't delete created Todo")
          } else {
            throw error;
          }
        }
      )
  }

}
