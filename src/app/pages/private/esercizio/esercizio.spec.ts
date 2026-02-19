import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio } from './esercizio';

describe('Esercizio', () => {
  let component: Esercizio;
  let fixture: ComponentFixture<Esercizio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esercizio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
