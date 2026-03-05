import { Component, inject, signal } from '@angular/core';
import { Todolistservice } from '../../../services/todolistservice';

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

}
