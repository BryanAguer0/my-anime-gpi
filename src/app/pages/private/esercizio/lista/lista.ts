import { Component, EventEmitter, input, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Anime } from '../../../../models/anime';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista implements OnInit,OnChanges,OnDestroy {



  // @Input()
  // listaAnime :Anime[] = [];
  listaAnime = input<Anime[]>();

  @Output()
  onCardClick: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
   console.log('ngOnChanges::', changes);

  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  onButtonClick(){
    this.onCardClick.emit("lista");
  }

}
