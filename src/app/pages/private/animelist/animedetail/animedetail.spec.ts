import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animedetail } from './animedetail';

describe('Animedetail', () => {
  let component: Animedetail;
  let fixture: ComponentFixture<Animedetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Animedetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animedetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
