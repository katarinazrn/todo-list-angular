import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [];
  lastId: number = 0;

  constructor() {
    let storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }

    let id = localStorage.getItem('lastId');
    if (id) {
      this.lastId = Number(id);
    }
  }

  add = (value: string) => {
    this.todos.push({
      value: value,
      id: this.lastId,
    });

    this.lastId++;
    localStorage.setItem('todos', JSON.stringify(this.todos));
    localStorage.setItem('lastId', JSON.stringify(this.lastId));
  };

  delete = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id != id);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

  update = (todo: Todo) => {
    this.todos = this.todos.map((t) => {
      if (t.id == todo.id) {
        return todo;
      } else return t;
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

  get=()=>{
    return this.todos;
  }
}
