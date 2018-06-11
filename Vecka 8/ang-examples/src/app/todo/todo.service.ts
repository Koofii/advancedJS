import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { TodoError, TodoErrorType } from './todoError';

@Injectable()
export class TodoService {

  url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: Http) { }

  handleError(errorResponse: Response){
    const { status } = errorResponse;
    let todoError;

    switch(status){
      case 404:
        todoError = new TodoError(TodoErrorType.NOT_FOUND)
        break;
      
    default:
      todoError = new TodoError();
    }

    todoError.cause = errorResponse;
    return Observable.throw(todoError);
  }

  getTodos(): Observable<any>{
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError)
  }

  createTodo(title: string){
    return this.http.post(
      this.url,
      JSON.stringify({
        title
      })
    )
    .map(response => {
      const newTodo = response.json();
      newTodo.title = title;

      return newTodo;
    });
  }

  updateTodo(id, titleToUpdate){
    return this.http.patch(
      `${this.url}/${id}`,
      JSON.stringify({
        titleToUpdate
      })
     )
     .catch(this.handleError)
  }

  deleteTodo(id){
    return this.http.delete(`${this.url}/${id}`)
      .catch(this.handleError)
  }
}
