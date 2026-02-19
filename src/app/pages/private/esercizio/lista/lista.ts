import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Anime } from '../../../../models/anime';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista implements OnInit,OnChanges,OnDestroy {



  @Input()
  listaAnime:Anime[] = [];

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
   console.log('ngOnChanges::', changes);

  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
