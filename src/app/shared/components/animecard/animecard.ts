import { Component, input } from '@angular/core';
import { Anime } from '../../../models/anime';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-animecard',
  imports: [DatePipe],
  templateUrl: './animecard.html',
  styleUrl: './animecard.css',
})
export class Animecard {

  public anime = input.required<Anime>()

}
