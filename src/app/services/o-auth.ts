import { computed, Injectable, signal } from '@angular/core';
import { User, UserCredentials } from '../models/user';
import { debounceTime, delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OAuth {
  private currentUser = signal <User | null>(null);
  isUserExist = computed(()=>{
    const isUser = this.currentUser();
    return !! isUser
  })

  getUser(){
    const user = new User({
     id : 999,
     name : "Gabriele",
     surname : "Colasuonno"
    })
    return of(user).pipe(map((userResponse)=> this.currentUser.set(userResponse)))
  }

  login(credentials:UserCredentials){
    return of(credentials).pipe(
      delay(3000)
    )
  
  }
  
}
