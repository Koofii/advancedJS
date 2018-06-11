import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  url = 'https://jsonplaceholder.typicode.com/todos';

  todos = [];

  constructor(private http: Http) { }

  cancel(todo) {
    todo.isEditing = false;
    todo.updatedTitle = todo.title;
  }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe(
        response => {
          this.todos = response.json().map(todo => {
            return {
              ...todo,

              isEditing: false,
              updatedTitle: todo.title
            };
          });
        },
        error => {
          // ...
        }
      )
  }

  createTodo(title) {
    let newTodo = {
      title
    };

    this.http.post(this.url, JSON.stringify(newTodo))
      .subscribe(
        response => {
          newTodo = {
            ...newTodo,
            ...response.json(),

            isEditing: false,
            updatedTitle: title
          };
          
          this.todos = [newTodo, ...this.todos];
        }
      )
  }

  updateTodo(todo) {
    this.http.patch(
      `${this.url}/${todo.id}`,
      JSON.stringify({
        title: todo.updatedTitle
      })
    )
    .subscribe(
      response => {
        todo.title = todo.updatedTitle;
        todo.isEditing = false;
      }
    )
  }

  deleteTodo(todoId) {
    this.http.delete(`${this.url}/${todoId}`)
      .subscribe(
        response => {
          this.todos = this.todos.filter(todo => todo.id !== todoId);
        },
        error => {
          console.log(error);
        }
      )
  }
}
