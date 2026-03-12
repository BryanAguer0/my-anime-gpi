import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animelist } from './animelist';
import { AnimeService } from '../../../services/animeService';
import { of } from 'rxjs';
import { Anime } from '../../../models/anime';

describe('Animelist', () => {
  let component: Animelist;
  let fixture: ComponentFixture<Animelist>;

  beforeEach(async () => {

    const mockAnimes: Anime[] = [];

    const mockAnimeService = {
      getListaAnime: (page:number, limit:number = 1) => {
        return of(mockAnimes)
      }
    }

    await TestBed.configureTestingModule({
      imports: [Animelist],
      providers: [
        {provide: AnimeService, useValue: mockAnimeService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animelist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('', () => {
    
  })
});
