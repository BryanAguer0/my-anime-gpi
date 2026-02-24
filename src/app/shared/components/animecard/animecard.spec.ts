import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animecard } from './animecard';

describe('Animecard', () => {
  let component: Animecard;
  let fixture: ComponentFixture<Animecard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Animecard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animecard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
