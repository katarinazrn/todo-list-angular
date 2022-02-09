import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {

  constructor(private _todosService: TodosService) {}

  ngOnInit(): void {}

  addTodo = (todo: Todo, form: NgForm) => {
    if(todo.value.trim()=="") return false;
    
    form.reset();
    this._todosService.add(todo.value);
    return false;
  };
}
