import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animesearch } from './animesearch';

describe('Animesearch', () => {
  let component: Animesearch;
  let fixture: ComponentFixture<Animesearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Animesearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animesearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
