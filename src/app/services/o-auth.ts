import { computed, Injectable, signal } from '@angular/core';
import { delay, map, Observable, of, switchMap } from 'rxjs';
import { IToken } from '../models/token.model';
import { RegisterFormData, User, UserCredentials } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class OAuth {
  /*
  private currentUser = signal<User | null>(null);
  isUserExist = computed(() => {
    const isUser = this.currentUser();
    return !!isUser
  })*/

  constructor() {
    const userFromLocalStorage = localStorage.getItem(oautKeys.USER);
    const token = localStorage.getItem(oautKeys.TOKEN);


    /*
    if (userFromLocalStorage) {
      const user = JSON.parse(userFromLocalStorage);
      //this.currentUser.set(user);
    }*/
    if (!!token) {

    }
  }

  getUser():Observable<User> {
    const user = new User({
      id: 999,
      name: "Gabriele",
      surname: "Colasuonno"
    })
    return of(user).pipe(map((userResponse) => {
      //this.currentUser.set(userResponse);
      //localStorage.setItem('user', JSON.stringify(userResponse));
      return user;
    }))
  }

  login(credentials: UserCredentials):Observable<IToken> {
    const token:IToken = {
      accessToken: 'ejy...',
      refreshToken: 'ejy2...'
    }
    return of(credentials).pipe(
      delay(3000),
      map(() => { return token }),
      map((response) => { 
        //localStorage.setItem(oautKeys.TOKEN, JSON.stringify(response));
        return response; 
      })

    )

  }

  logOut() {
    return of(true).pipe(delay(1000), map(() => {
      //localStorage.removeItem('user')
      //this.currentUser.set(null);
    }));
  }

  register(data: RegisterFormData) {
    return of(data).pipe(
      delay(2000),
      switchMap(() => this.getUser())
    )
  }

  addUser(data: RegisterFormData) {
    return of(data).pipe(
      delay(2000)
    )
  }

}
enum oautKeys {
  TOKEN = 'token',
  USER = 'user'
}
