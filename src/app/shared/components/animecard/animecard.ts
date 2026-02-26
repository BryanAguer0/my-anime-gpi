import { Component, inject, input } from '@angular/core';
import { Anime } from '../../../models/anime';
import { DatePipe } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animecard',
  imports: [DatePipe, TruncatePipe],
  templateUrl: './animecard.html',
  styleUrl: './animecard.css',
})
export class Animecard {

  public anime = input.required<Anime>();
  public router = inject(Router);

  public goToDetail() {
    this.router.navigate([
      "home",
      "anime-detail",
      this.anime().id
    ])
  }
}
