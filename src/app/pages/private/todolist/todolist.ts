import { Component, inject, signal } from '@angular/core';
import { Todolistservice } from '../../../services/todolistservice';
import { iToDo } from '../../../models/todolist';

@Component({
  selector: 'app-todolist',
  imports: [],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css',
  providers: [
    Todolistservice
  ]
})
export class Todolist {

  toDoListService = inject(Todolistservice);
  allToDos = this.toDoListService.allToDo
  completed = this.toDoListService.completedCount
  pending = this.toDoListService.pendingCount
  text = signal('');

  addToDo() {
    if (!this.text()) return;
    this.toDoListService.add(this.text());
    this.text.set('');
  }

  completeToDo(id:number) {
    this.toDoListService.completed(id);
  }

  delete(id:number) {
    this.toDoListService.remove(id)
  }

  update(todo: iToDo) {
    this.toDoListService.update(todo);
  }

  setToDoToEdit(todo:iToDo) {
    todo.isEdit = !todo.isEdit
  }

}
