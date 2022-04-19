import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  taskList: any[] = []
  completed: boolean = false;

  newTodoForm = this.formbuilder.group({
    todoItem: ''
  });

  constructor(
    private formbuilder: FormBuilder
  ) { }


  addTask() {
    const value = this.newTodoForm.value.todoItem
    this.taskList.push({id: this.taskList.length, name: value, isDone: false})
    window.localStorage.setItem('task', JSON.stringify(this.taskList));
    this.newTodoForm.reset()
  }

  markDone(value: any){
    value.completed = !value.completed;
    value.completed === true ? 
      this.taskList.push(this.taskList.splice(this.taskList.indexOf(value), 1)[0]) : 
      this.taskList.unshift(this.taskList.splice(this.taskList.indexOf(value), 1)[0]);
  }

  deleteTask(i: any){
    this.taskList.splice(i, 1);
    window.localStorage.setItem('task', JSON.stringify(this.taskList));
  }

  ngOnInit(): void {
    this.taskList = window.localStorage.getItem('task') ?
      JSON.parse(localStorage.getItem('task')!) : [];
  }
}

  function todoItem(todoItem: any){
    throw Error('Function not implemented');
  } 
