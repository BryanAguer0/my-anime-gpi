import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animelist } from './animelist';

describe('Animelist', () => {
  let component: Animelist;
  let fixture: ComponentFixture<Animelist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Animelist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animelist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
