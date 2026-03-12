import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Private } from './private';
import { provideRouter } from '@angular/router';

describe('Private', () => {
  let component: Private;
  let fixture: ComponentFixture<Private>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Private],
      providers: [provideRouter([])]

    })
    .compileComponents();

    fixture = TestBed.createComponent(Private);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
