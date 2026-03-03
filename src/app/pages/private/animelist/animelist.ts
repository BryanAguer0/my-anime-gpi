import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { COMPONENTS } from '../../../shared/shared';
import { AnimeService } from '../../../services/animeService';
import { Anime } from '../../../models/anime';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { InfiniteScroll } from '../../../shared/directives/infinite-scroll';


@Component({
  selector: 'app-animelist',
  imports: [...COMPONENTS,InfiniteScroll],
  templateUrl: './animelist.html',
  styleUrl: './animelist.css',
})
export class Animelist implements OnInit, OnDestroy {

  private animeService = inject(AnimeService)
  list: Anime[] = []
  listAnime= signal <Anime[]>([])
  list$ = new Observable<Anime[]>
  destroy$ = new Subject<boolean>()
  currentpage:number=0

  ngOnInit(): void {
    this.loadAnime()
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  loadAnime(): void{
    this.currentpage++;
    this.animeService.getListaAnime(this.currentpage).pipe(
      takeUntil(this.destroy$),map((newlist)=>{
        this.listAnime.update((currentlist)=>[...currentlist,...newlist])

      }))
      .subscribe()

  }
}
