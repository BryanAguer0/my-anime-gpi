import { Injectable } from '@angular/core';
import { map, of, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private mylista: User[] = [new User({ id: 1, name: "Michele", surname: "Latorraca" }),
  new User({ id: 2, name: "Francesco", surname: "Marchese" }),
  new User({ id: 3, name: "Natale", surname: "Domanico" })
  ]

  public getLista(query: string | null) {

    return of(this.mylista).pipe(
      map((lista) => {
        lista = lista.filter((value) => value.name.includes(query ?? "") || value.surname.includes(query ?? ""))
        return lista
      }),
      tap((lista)=> {console.log(lista)})
    )
  }


}
