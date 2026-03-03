import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../../../../services/animeService';
import { Anime } from '../../../../models/anime';
import { DatePipe } from '@angular/common';
import { Animelist } from '../animelist';
import { map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-animedetail',
  imports: [DatePipe, Animelist],
  templateUrl: './animedetail.html',
  styleUrl: './animedetail.css',
})
export class Animedetail implements OnInit {

  activeRoute = inject(ActivatedRoute);
  animeService = inject(AnimeService);
  animeDetail = signal<Anime | null>(null);

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    const id = params["anime-id"];
    console.log("params snapshot", params);
    //this.activeRoute.params.subscribe({
    //next: (params) => console.log("params observable", params)
    //})
    //this.animeService.getAnimeById(id).subscribe({
    //next: (anime) => { 
    //console.log(anime);
    //this.animeDetail.set(anime);
    //}
    //});
    this.activeRoute.params.pipe(
      map((params) => params?.["anime-id"]),
      switchMap((id) => id ? this.animeService.getAnimeById(id) : of(null)),
      map((animeResponse) => {
        if (animeResponse) this.animeDetail.set(animeResponse);
        return animeResponse;
      })
    )
    .subscribe()
  }
}
