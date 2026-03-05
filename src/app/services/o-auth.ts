import { computed, Injectable, signal } from '@angular/core';
import { User, UserCredentials } from '../models/user';
import { debounceTime, delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OAuth {
  private currentUser = signal <User | null>(null);
  isUserExist = computed(()=>{
    const isUser = this.currentUser();
    return !! isUser
  })

  constructor() {
    const userFromLocalStorage = localStorage.getItem('user');
    if (userFromLocalStorage) {
      const user = JSON.parse(userFromLocalStorage);
      this.currentUser.set(user);
    }
  }

  getUser(){
    const user = new User({
     id : 999,
     name : "Gabriele",
     surname : "Colasuonno"
    })
    return of(user).pipe(map((userResponse)=> {
      this.currentUser.set(userResponse);
      localStorage.setItem('user',JSON.stringify(userResponse));
    } ))
  }

  login(credentials:UserCredentials){
    return of(credentials).pipe(
      delay(3000)
    )
  }

  logOut() {
    return of(true).pipe(delay(1000),map(() => {
      localStorage.removeItem('user')
      this.currentUser.set(null);
    }));
  }
  
}
