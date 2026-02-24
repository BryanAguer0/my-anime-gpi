import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { COMPONENTS } from '../../../shared/shared';
import { AnimeService } from '../../../services/animeService';
import { Anime } from '../../../models/anime';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-animelist',
  imports: [...COMPONENTS, AsyncPipe],
  templateUrl: './animelist.html',
  styleUrl: './animelist.css',
})
export class Animelist implements OnInit, OnDestroy {

  private animeService = inject(AnimeService)
  list: Anime[] = []
  list$ = new Observable<Anime[]>
  destroy$ = new Subject<boolean>()

  ngOnInit(): void {
    this.list$ = this.animeService.getListaAnime().pipe(
      takeUntil(this.destroy$)
      //oppure ha bisogno di una variabile DestroyReff
      //takeUntilDestroyed
    )
    //.subscribe(
    //  {
    //    next:(lista) => this.list = lista
    //  }
    //)
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
