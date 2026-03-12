import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animecard } from './animecard';
import { provideRouter } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { Anime } from '../../../models/anime';
import { signal } from '@angular/core';

describe('Animecard', () => {
  let component: Animecard;
  let fixture: ComponentFixture<Animecard>;

  const  mockAnime = Object.assign(new Anime(), {
    id: 1,
    name: "Test Anime",
    image: "https://example.com/img.png",
    description: 'Test description',
    airedFrom: new Date('12-03-2026'),
    genres: []
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Animecard],
      providers: [provideRouter([])]

    })
    .compileComponents();

    fixture = TestBed.createComponent(Animecard);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('anime',mockAnime);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
