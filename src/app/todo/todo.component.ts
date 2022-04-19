import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  taskList: any[] = []

  newTodoForm = this.formbuilder.group({
    todoItem: ''
  });

  constructor(
    private formbuilder: FormBuilder
  ) { }


  addTask() {
    const value = this.newTodoForm.value.todoItem
    this.taskList.push({id: this.taskList.length, value: value, isDone: false})
    this.newTodoForm.reset()
  }

  ngOnInit(): void {
  }

}
