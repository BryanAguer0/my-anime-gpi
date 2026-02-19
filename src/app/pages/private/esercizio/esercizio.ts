import { Anime } from './../../../models/anime';
import { Component } from '@angular/core';
import { Lista } from './lista/lista';


@Component({
  selector: 'app-esercizio',
  imports: [Lista],
  templateUrl: './esercizio.html',
  styleUrl: './esercizio.css',
})
export class Esercizio {

  public listaAnime:Anime[] = [
    new Anime({id:0,name:'primo',image:''}),
    new Anime({id:1,name:'secondo',image:''})
  ];

}
