import { Anime } from './../../../models/anime';
import { Component } from '@angular/core';
import { Lista } from './lista/lista';
import { CommonModule } from '@angular/common';
import { HasRoleDirective } from '../../../shared/directives/has-role';
import { HasRoleDisabled } from '../../../shared/directives/has-role-disabled';
import { Searchbar } from './searchbar/searchbar';


@Component({
  selector: 'app-esercizio',
  imports: [Lista, CommonModule, HasRoleDirective, HasRoleDisabled, Searchbar],
  templateUrl: './esercizio.html',
  styleUrl: './esercizio.css',
})
export class Esercizio {

  canshow:boolean=false;
  themestatus:'auto'|'dark'|'light'='auto';

  public listaAnime:Anime[] = [
    //new Anime({id:0,name:'primo',image:''}),
    //new Anime({id:1,name:'secondo',image:''})
  ];

  onCardClick(evento:string){
    console.log('onCardClick from esercizio:',evento);
  }

  public OnButtonPress(){

    this.canshow =  !this.canshow
  }
}
