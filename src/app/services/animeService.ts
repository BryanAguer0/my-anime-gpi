import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Anime } from '../models/anime';
import { IAnimeList } from '../models/ianime';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {

  private readonly http = inject(HttpClient)
  private readonly apiUrl = "https://api.jikan.moe/v4"

  public getListaAnime():Observable<Anime[]> { 
    return this.http.get<IAnimeList>(`${this.apiUrl}/anime`).pipe(
      map((animeList) => {
       return animeList.data.map((item)=>new Anime(item))
      })
    )
  }
}
