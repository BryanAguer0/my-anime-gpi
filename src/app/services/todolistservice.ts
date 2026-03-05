import { computed, Injectable, Signal, signal } from '@angular/core';
import { iToDo } from '../models/todolist';

@Injectable()
export class Todolistservice {
  private readonly toDoList = signal<iToDo[]>([]);
  readonly allToDo = this.toDoList.asReadonly();
  readonly completedCount = computed(() => this.toDoList().filter((toDo) => toDo.completed).length)
  readonly pendingCount = computed(() => this.toDoList().filter((toDo) => !toDo.completed).length)


  add(text: string) {
    const toDo: iToDo = {
      id: Date.now(),
      text,
      completed: false
    }
    this.toDoList.update((list) => [...list, toDo])
  }

  remove(id: number) {
    this.toDoList.update((list) => list.filter((toDo) => toDo.id != id))
  }

  completed(id: number) {
    this.toDoList.update((list) => list.map((toDo) => toDo.id == id ? { ...toDo, completed: !toDo.completed } : toDo))

  }
}
