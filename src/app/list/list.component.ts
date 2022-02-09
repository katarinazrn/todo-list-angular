import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private _todosService: TodosService) {}

  ngOnInit(): void {
    this.todos = this._todosService.get();
  }

  delete(id:number){
    this._todosService.delete(id);
    this.todos = this._todosService.get();
  }
}
